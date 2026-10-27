#!/usr/bin/env python3
"""Build logo, favicon, PWA, tile and Open Graph variants from the SM mark."""

from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
APP = ROOT / "src" / "app"
BRAND = PUBLIC / "brand"

SOURCE_CANDIDATES = [
    PUBLIC / "logo-1791742266496-afe6386b-b412-4eb6-95fa-5d0337f20e72.png",
    BRAND / "sm-mark-source.png",
]

GREEN = (0, 65, 38)
GREEN_DEEP = (0, 46, 27)
GREEN_MID = (10, 90, 52)
SUN = (254, 154, 1)
INK = (20, 36, 26)
WHITE = (255, 255, 255)
OFF_WHITE = (245, 247, 244)
FRAME = (197, 212, 201)

LATO_BLACK = "/usr/share/fonts/truetype/lato/Lato-Black.ttf"
LATO_BOLD = "/usr/share/fonts/truetype/lato/Lato-Bold.ttf"
LATO_SEMI = "/usr/share/fonts/truetype/lato/Lato-Semibold.ttf"


def load_source() -> Image.Image:
    for path in SOURCE_CANDIDATES:
        if path.exists():
            return Image.open(path).convert("RGBA")
    raise FileNotFoundError("New SM logo source PNG was not found.")


def white_to_transparent(im: Image.Image, threshold: int = 248) -> Image.Image:
    pixels = im.load()
    w, h = im.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = pixels[x, y]
            if r >= threshold and g >= threshold and b >= threshold:
                pixels[x, y] = (r, g, b, 0)
    return im


def trim(im: Image.Image, pad: int = 8) -> Image.Image:
    bbox = im.getbbox()
    if not bbox:
        return im
    left, top, right, bottom = bbox
    left = max(0, left - pad)
    top = max(0, top - pad)
    right = min(im.width, right + pad)
    bottom = min(im.height, bottom + pad)
    return im.crop((left, top, right, bottom))


def fit_contain(
    im: Image.Image, box: tuple[int, int], resample=Image.Resampling.LANCZOS
) -> Image.Image:
    clone = im.copy()
    clone.thumbnail(box, resample)
    return clone


def letterbox(
    im: Image.Image,
    size: int,
    bg: tuple[int, int, int, int] = (255, 255, 255, 255),
    padding: float = 0.12,
    radius: int | None = None,
) -> Image.Image:
    canvas = Image.new("RGBA", (size, size), bg)
    inner = max(1, int(size * (1 - 2 * padding)))
    fitted = fit_contain(im, (inner, inner))
    x = (size - fitted.width) // 2
    y = (size - fitted.height) // 2
    canvas.paste(fitted, (x, y), fitted)
    if radius:
        mask = Image.new("L", (size, size), 0)
        ImageDraw.Draw(mask).rounded_rectangle((0, 0, size - 1, size - 1), radius, fill=255)
        canvas.putalpha(mask)
    return canvas


def save_png(im: Image.Image, path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    im.save(path, format="PNG", optimize=True)


def save_webp(im: Image.Image, path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    rgb = im.convert("RGB") if im.mode == "RGBA" and not has_alpha(im) else im
    rgb.save(path, format="WEBP", quality=92, method=6)


def has_alpha(im: Image.Image) -> bool:
    if im.mode != "RGBA":
        return False
    extrema = im.getchannel("A").getextrema()
    return extrema is not None and extrema[0] < 255


def gradient(size: tuple[int, int], top: tuple[int, int, int], bottom: tuple[int, int, int]) -> Image.Image:
    w, h = size
    mask = Image.new("L", (1, h))
    for y in range(h):
        mask.putpixel((0, y), int(255 * y / max(h - 1, 1)))
    mask = mask.resize((w, h))
    return Image.composite(Image.new("RGB", size, bottom), Image.new("RGB", size, top), mask)


def font(path: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(path, size)


def rounded_panel(size: tuple[int, int], radius: int, fill=WHITE) -> Image.Image:
    panel = Image.new("RGBA", size, (0, 0, 0, 0))
    ImageDraw.Draw(panel).rounded_rectangle((0, 0, size[0] - 1, size[1] - 1), radius, fill=fill)
    return panel


def compose_og_landscape(logo: Image.Image) -> Image.Image:
    w, h = 1200, 630
    bg = gradient((w, h), GREEN_DEEP, GREEN)
    highlight = Image.new("L", (w, h), 0)
    ImageDraw.Draw(highlight).ellipse((-120, -180, 720, 520), fill=40)
    highlight = highlight.filter(ImageFilter.GaussianBlur(80))
    wash = Image.new("RGB", (w, h), GREEN_MID)
    bg = Image.composite(wash, bg, highlight)

    draw = ImageDraw.Draw(bg)
    draw.rounded_rectangle((36, 36, w - 37, h - 37), 8, outline=FRAME, width=1)

    card = rounded_panel((520, 522), 8)
    mark = fit_contain(logo, (440, 360))
    card.paste(
        mark,
        ((card.width - mark.width) // 2, (card.height - mark.height) // 2),
        mark,
    )
    bg.paste(card, (64, 54), card)

    x = 628
    kicker = font(LATO_BOLD, 18)
    title = font(LATO_BLACK, 44)
    tag = font(LATO_SEMI, 26)
    meta = font(LATO_BOLD, 18)
    draw.text((x, 150), "SM SOLAR & ELECTRICAL", font=kicker, fill=SUN)
    draw.text((x, 198), "Solar & Electrical", font=title, fill=WHITE)
    draw.text((x, 254), "Engineering · Kenya", font=title, fill=WHITE)
    draw.text((x, 340), "Engineered Power.", font=tag, fill=(236, 244, 238))
    draw.text((x, 376), "Reliable Results.", font=tag, fill=(236, 244, 238))
    draw.text((x, 470), "Kisumu  ·  Nairobi  ·  Kenya", font=meta, fill=(196, 214, 202))
    draw.text(
        (x, 506),
        "San Marina Engineering Limited",
        font=font(LATO_SEMI, 16),
        fill=(196, 214, 202),
    )
    return bg.convert("RGBA")


def compose_og_square(logo: Image.Image) -> Image.Image:
    size = 1200
    bg = gradient((size, size), GREEN_DEEP, GREEN)
    draw = ImageDraw.Draw(bg)
    draw.rounded_rectangle((40, 40, size - 41, size - 41), 10, outline=FRAME, width=1)

    card = rounded_panel((920, 520), 8)
    mark = fit_contain(logo, (820, 430))
    card.paste(mark, ((card.width - mark.width) // 2, (card.height - mark.height) // 2), mark)
    bg.paste(card, (140, 150), card)

    title = font(LATO_BLACK, 48)
    tag = font(LATO_SEMI, 28)
    title_text = "SM Solar & Electrical"
    tag_text = "Solar company  ·  Engineering contractor  ·  Kenya"
    tw = draw.textlength(title_text, font=title)
    sw = draw.textlength(tag_text, font=tag)
    draw.text(((size - tw) / 2, 720), title_text, font=title, fill=WHITE)
    draw.text(((size - sw) / 2, 790), tag_text, font=tag, fill=SUN)
    return bg.convert("RGBA")


def write_safari_svg(path: Path) -> None:
    path.write_text(
        """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="img" aria-label="SM Solar">
  <path fill="#000" d="M9.15.4 3.05 8.35h3.7L4.7 15.6 13.1 6.7H9.15L12.2.4z"/>
</svg>
""",
        encoding="utf-8",
    )


def write_favicon_svg(path: Path) -> None:
    path.write_text(
        """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="SM Solar & Electrical">
  <rect width="64" height="64" rx="14" fill="#004126"/>
  <path fill="#fe9a01" d="M36.2 10 20.4 32.2h10.2L24.6 54 44.8 30.4H33.8L41.8 10z"/>
</svg>
""",
        encoding="utf-8",
    )


def write_og_svg(path: Path) -> None:
    path.write_text(
        """<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-labelledby="ogTitle ogDesc">
  <title id="ogTitle">SM Solar &amp; Electrical</title>
  <desc id="ogDesc">Engineered Power. Reliable Results. Solar and electrical engineering in Kenya.</desc>
  <rect width="1200" height="630" fill="#004126"/>
  <rect x="36" y="36" width="1128" height="558" fill="none" stroke="#c5d4c9" stroke-width="1"/>
  <rect x="72" y="72" width="520" height="268" fill="#ffffff"/>
  <text x="72" y="410" font-family="Sora, Lato, Arial, sans-serif" font-size="42" font-weight="800" fill="#ffffff">Solar &amp; Electrical Engineering · Kenya</text>
  <text x="72" y="458" font-family="Sora, Lato, Arial, sans-serif" font-size="26" font-weight="600" fill="#fe9a01">Engineered Power. Reliable Results.</text>
  <text x="72" y="556" font-family="Manrope, Lato, Arial, sans-serif" font-size="16" font-weight="700" fill="#dce8e0">SM Solar &amp; Electrical · San Marina Engineering Limited</text>
</svg>
""",
        encoding="utf-8",
    )


def write_browserconfig(path: Path) -> None:
    path.write_text(
        """<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
  <msapplication>
    <tile>
      <square150x150logo src="/mstile-150x150.png"/>
      <square310x310logo src="/mstile-310x310.png"/>
      <TileColor>#004126</TileColor>
    </tile>
  </msapplication>
</browserconfig>
""",
        encoding="utf-8",
    )


def main() -> None:
    source = load_source()
    BRAND.mkdir(parents=True, exist_ok=True)
    source.save(BRAND / "sm-mark-source.png", format="PNG", optimize=True)

    transparent = trim(white_to_transparent(source.copy()), pad=12)
    # Header/footer mark: keep a little white padding so it reads on light surfaces.
    wordmark = Image.new("RGBA", transparent.size, (255, 255, 255, 0))
    wordmark.paste(transparent, (0, 0), transparent)
    scaled = fit_contain(wordmark, (800, 480))
    save_png(scaled, BRAND / "sm-solar-electrical.png")
    save_webp(scaled, BRAND / "sm-solar-electrical.webp")
    save_webp(scaled, PUBLIC / "SM Solar & Electrical.webp")
    print("wordmark", scaled.size)

    opaque_mark = Image.new("RGBA", transparent.size, (*WHITE, 255))
    opaque_mark.paste(transparent, (0, 0), transparent)

    squares = {
        PUBLIC / "favicon-16.png": (16, 0.08),
        PUBLIC / "favicon-32.png": (32, 0.10),
        PUBLIC / "favicon-48.png": (48, 0.10),
        PUBLIC / "favicon.png": (32, 0.10),
        PUBLIC / "apple-touch-icon.png": (180, 0.12),
        PUBLIC / "apple-touch-icon-precomposed.png": (180, 0.12),
        PUBLIC / "icon-192.png": (192, 0.12),
        PUBLIC / "icon-512.png": (512, 0.12),
        PUBLIC / "mstile-150x150.png": (150, 0.14),
        PUBLIC / "mstile-310x310.png": (310, 0.14),
    }
    for path, (size, pad) in squares.items():
        icon = letterbox(opaque_mark, size, bg=(*WHITE, 255), padding=pad)
        save_png(icon.convert("RGBA"), path)

    maskable = letterbox(opaque_mark, 512, bg=(*WHITE, 255), padding=0.20)
    save_png(maskable, PUBLIC / "icon-maskable-512.png")

    ico = letterbox(opaque_mark, 48, padding=0.10).convert("RGBA")
    ico.save(
        PUBLIC / "favicon.ico",
        format="ICO",
        sizes=[(16, 16), (32, 32), (48, 48)],
    )
    ico.save(APP / "favicon.ico", format="ICO", sizes=[(16, 16), (32, 32), (48, 48)])

    og = compose_og_landscape(opaque_mark)
    square = compose_og_square(opaque_mark)
    save_png(og, PUBLIC / "og.png")
    save_png(square, PUBLIC / "og-square.png")
    save_png(og, PUBLIC / "twitter-image.png")
    save_webp(og.convert("RGB"), PUBLIC / "og.webp")
    save_webp(square.convert("RGB"), PUBLIC / "og-square.webp")

    write_safari_svg(PUBLIC / "safari-pinned-tab.svg")
    write_favicon_svg(PUBLIC / "favicon.svg")
    write_og_svg(PUBLIC / "og.svg")
    write_browserconfig(PUBLIC / "browserconfig.xml")
    write_favicon_svg(PUBLIC / "apple-touch-icon.svg")

    uuid_logo = PUBLIC / "logo-1791742266496-afe6386b-b412-4eb6-95fa-5d0337f20e72.png"
    if uuid_logo.exists():
        uuid_logo.unlink()

    print("generated brand assets")


if __name__ == "__main__":
    main()
