---
name: La Madrina · Cabañas de altura
description: A topographic survey sheet of the Tafí valley, read from the title block down to the plot above Dique La Angostura.
colors:
  sheet: "#f4f3ee"
  sheet-2: "#eceae1"
  sheet-lifted: "#fbfaf6"
  ink: "#1b241e"
  ink-2: "#4a5349"
  rule: "#cfccbf"
  valley: "#2f4a35"
  valley-deep: "#233a29"
  valley-ink: "#eef0e6"
  valley-ink-2: "#c4cdbd"
  ochre: "#c9b98f"
  ochre-ink: "#2a2416"
  ochre-ink-2: "#574b30"
  sienna: "#9a5a2c"
  water: "#2d6f9a"
  water-deep: "#1f5577"
  water-ink: "#ffffff"
  water-tint: "#b9d3e2"
  error: "#a3341f"
  error-ink: "#8f2c19"
typography:
  display:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(3.4rem, 1.6rem + 7.4vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 72"
  headline:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(2rem, 1.3rem + 2.8vw, 3.4rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 82"
  title:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(1.3rem, 1.1rem + 0.8vw, 1.7rem)"
    fontWeight: 650
    lineHeight: 1.15
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 88"
  figure:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(4rem, 2.6rem + 5vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.03em"
    fontFeature: "'tnum' 1"
    fontVariation: "'wdth' 70"
  lede:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(1.08rem, 1rem + 0.35vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    fontVariation: "'wdth' 100"
  label:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 650
    letterSpacing: "0.14em"
  place-label:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.82rem"
    fontWeight: 650
    letterSpacing: "0.22em"
    fontVariation: "'wdth' 115"
  water-name:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "26px"
    fontWeight: 500
    letterSpacing: "0.06em"
    fontVariation: "'wdth' 110"
rounded:
  hairline: "2px"
  station: "50%"
spacing:
  space-1: "0.5rem"
  space-2: "1rem"
  space-3: "1.5rem"
  space-4: "2.5rem"
  space-5: "4rem"
  space-6: "clamp(4.5rem, 9vw, 8rem)"
  gutter: "clamp(16px, 4vw, 40px)"
  wrap: "1200px"
  edge-h: "64px"
components:
  button-contact:
    backgroundColor: "{colors.water}"
    textColor: "{colors.water-ink}"
    rounded: "{rounded.hairline}"
    padding: "0.75rem 1.4rem"
    height: "48px"
  button-contact-hover:
    backgroundColor: "{colors.water-deep}"
    textColor: "{colors.water-ink}"
  button-contact-sm:
    padding: "0.45rem 0.95rem"
    height: "40px"
  button-contact-lg:
    padding: "0.9rem 1.8rem"
    height: "56px"
  button-sheet:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.hairline}"
    padding: "0.75rem 1.4rem"
    height: "48px"
  button-sheet-hover:
    backgroundColor: "#ffffff"
  field-input:
    backgroundColor: "#ffffff"
    textColor: "{colors.ink}"
    rounded: "{rounded.hairline}"
    padding: "0.5rem 0.55rem"
    height: "46px"
  lang-toggle:
    textColor: "{colors.ink-2}"
    typography: "{typography.label}"
    height: "36px"
    width: "40px"
  lang-toggle-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.sheet}"
  cartouche:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    padding: "1.25rem 1.25rem 0"
  legend:
    backgroundColor: "{colors.sheet-lifted}"
    textColor: "{colors.ink}"
  plate-empty:
    backgroundColor: "{colors.sheet-2}"
    textColor: "{colors.ink-2}"
  plate-empty-dark:
    backgroundColor: "{colors.valley-deep}"
    textColor: "{colors.valley-ink}"
  choice:
    textColor: "{colors.valley-ink}"
    rounded: "{rounded.hairline}"
    padding: "0.9rem 1.1rem"
  choice-selected:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
  panel:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
---

# Design System: La Madrina · Cabañas de altura

## Overview

**Creative North Star: "Carta de altura"**

The site is a topographic survey sheet of the Tafí valley. The page opens on the sheet itself: a contour field drawn live in contour sienna, the dique as a blue body with an italic water name, La Madrina's trig-point mark with coordinates and a leader line, all inside a double neatline with coordinate ticks. Scrolling descends the sheet. Every section is a hypsometric band: survey paper for reading and reference, valley green for choosing a cabin, highland ochre for guest proof. The route RP 307 is drawn down the margin ahead of the scroll, counting kilometres to 61.7.

The character is cartographic, not rustic. Hairline frames instead of cards, a title-block cartouche instead of a floating booking bar, a map legend of drawn symbols instead of an amenity grid, contour plates where photographs are not yet supplied. One family, Archivo, does all the talking by moving along its width axis: condensed for names and figures, wide and tracked for place labels, italic only for water. Colour is law, not decoration: Dique blue appears where there is water and where the visitor makes contact.

The density is that of a well-set map sheet: generous bands (4.5–8rem vertical), compact labelled detail inside them, and every reading surface on clean sheet paper.

**Key Characteristics:**
- Survey-paper ground with hypsometric band tints that own whole sections.
- Dique blue reserved for water and the contact action.
- Archivo only; roles split by the `wdth` axis, italic reserved for water names.
- Hairline neatlines, cartouche title block, map legend, gazetteer, strip map.
- Contour plates stand in for missing photographs; they never fake one.
- The RP 307 route rail draws ahead of the scroll.

## Colors

A muted survey palette: paper and ink, three hypsometric tints, one blue held back for water and contact.

### Primary
- **Dique Blue** (water): the colour of Dique La Angostura on the sheet (lake outline, water-name labels) and the fill of every contact action (WhatsApp buttons, the cartouche submit, the mobile dock, the "Consultá tarifas" inline link). Also carries keyboard and input focus on paper grounds, since focus is the path to the action.
- **Deep Dique** (water-deep): hover state of the contact button, the water-name label fill, inline contact link text.
- **Lake Tint** (water-tint): the lake body fill in the hero terrain and the halo stroke behind water-name labels. Nothing else.

### Secondary
- **Valley Green** (valley): the ground of the cabin-choosing band and the contact band; label backgrounds on dark map frames.
- **Valley Floor** (valley-deep): the footer, the Sauco feature panel, the map frame, dark contour plates.
- **Valley Paper** (valley-ink) and **Valley Mist** (valley-ink-2): primary and secondary text on green grounds.

### Tertiary
- **Highland Ochre** (ochre): the ground of the guest-proof band; text selection; gazetteer triangles, Sauco tick rules and the focus ring on green grounds; the route rail stroke when it passes over a dark band.
- **Ochre Ink** (ochre-ink) and **Ochre Umber** (ochre-ink-2): text on the ochre band.
- **Contour Sienna** (sienna): contour lines, the route line and rail, kilometre readouts, nav underline, link-arrow underline, the brand mark, list triangles, star ratings. The drawing colour of the sheet.

### Neutral
- **Survey Sheet** (sheet): page ground, panels, cartouche, label backgrounds over contours.
- **Plate Paper** (sheet-2): empty plate ground, scrollbar track, hover fill on the language switch.
- **Bright Sheet** (sheet-lifted): the legend sheet and the live status chip; the one surface lighter than the page.
- **Survey Ink** (ink): text, neatlines, cartouche and legend frames, road dashes, the trig mark.
- **Grey Ink** (ink-2): secondary text, field labels, coordinate ticks, map labels.
- **Hairline** (rule): inner neatline, band dividers, dotted legend rows, panel borders.
- **Error** (error / error-ink): invalid field border and ring, and form error text. Form validation only.

### Named Rules
**The Dique Law.** Dique blue marks water and the contact action, and nothing else; focus rings on paper may borrow it because they lead to the action. Secondary actions (directions, reviews) use the sheet button or a sienna-underlined link, never blue.

**The Band Owns the Section Rule.** A hypsometric tint is a full-width section ground, never a tag or accent chip. Inside a coloured band, reading copy that needs long attention sits on a sheet panel.

## Typography

**Display Font:** Archivo (variable, `wdth` 62–125, `wght` 300–800, roman and italic), with system-ui fallback
**Body Font:** Archivo
**Label/Mono Font:** Archivo; tabular figures (`tnum`) for every coordinate, distance, score and kilometre

**Character:** One grotesque used the way a cartographer uses a single type family on a sheet: width, weight and tracking carry the hierarchy, so names compress and place labels spread.

### Hierarchy
- **Display** (800, `wdth` 72, clamp 3.4–6rem, line-height 0.9, −0.035em): the property name in the hero, once.
- **Headline** (700, `wdth` 82, clamp 2–3.4rem, 1.04, −0.02em): section titles. Larger condensed variants for the Sauco title (`wdth` 80, up to 3.6rem) and the contact title (`wdth` 75, up to 4.4rem).
- **Title** (650, `wdth` 88, clamp 1.3–1.7rem, 1.15): cabin category and sub-feature titles; the cartouche title (750, `wdth` 85, 1.35rem).
- **Figure** (800, `wdth` 70, clamp 4–6rem, 0.95, tabular): guest scores. Smaller condensed figures (`wdth` 75, 750) for cabin counts, strip distances and profile sub-scores.
- **Lede** (400, clamp 1.08–1.25rem, 1.5, max 56ch, secondary ink): the paragraph under a headline.
- **Body** (400, 1.0625rem / 1rem under 520px, 1.6, `wdth` 100, max ~60ch).
- **Label** (650, 0.72–0.8rem, 0.12–0.18em, uppercase): field labels, legend and profile titles, channel keys, plate captions, coordinate ticks.
- **Place label** (650, `wdth` 115–120, 0.22–0.32em tracking, uppercase): the hero place line and place names on the map.
- **Water name** (500 italic, `wdth` 110, 0.06em, deep Dique): the dique on the map.

### Named Rules
**The Italic Is Water Rule.** Italic appears only on water names. No italic emphasis, no italic quotes; the gazetteer explicitly resets to normal style.

**The Width Axis Rule.** Hierarchy moves along `wdth`: names and figures condense (70–90), body sits at 100, place labels widen (110–125). Don't introduce a second family to get contrast.

## Layout

A centred wrap of 1200px with a fluid gutter (16–40px); the hero sheet and edge strip extend to 1440px. Sections are full-bleed bands with `space-6` (4.5–8rem) vertical padding; a tighter band uses `space-5` (4rem) on top. Adjacent sheet bands are separated by a single hairline rule. Spacing steps are 0.5 / 1 / 1.5 / 2.5 / 4rem.

Composition is asymmetric two- and three-column grids in uneven fractions (5:6, 4:5:5, 7:5, 6:5, 4:8, 5:7). The hero is a grid: copy top-left in a framed sheet panel, an optional photo inset top-right, the cartouche bottom-right. Info places a sticky head beside a ruled definition list.

Responsive: the nav collapses to a clip-path drawer at 1360px; three-column grids drop to two at 1024px and the strip map turns into a dashed per-stop grid; at 820px everything stacks, the hero shows a cropped map window above the cartouche, coordinate side ticks drop, and a sticky contact dock appears; at 520px the cartouche fields reflow to two columns. The route rail exists only at 1400px and wider; narrower screens get the dashed route line under the edge strip.

## Elevation & Depth

Depth comes from paper and line, not from shadow. Surfaces are flat sheets separated by hairlines and band tints; a sheet laid over the map (cartouche, photo inset, opinion profile, sheet button) is the only thing that lifts, with one soft, ink-tinted shadow. The contact button carries its own blue-tinted lift.

### Shadow Vocabulary
- **Sheet lift** (`box-shadow: 0 1px 2px rgba(27,36,30,0.08), 0 12px 32px -12px rgba(27,36,30,0.28)`): a sheet resting on the map or a band: cartouche, photo inset, profile panel, sheet button.
- **Contact lift** (`box-shadow: 0 1px 0 rgba(255,255,255,0.18) inset, 0 6px 16px -8px rgba(31,85,119,0.7)`; hover deepens to `0 10px 22px -10px rgba(31,85,119,0.8)` with a 1px rise): contact buttons only.
- **Double neatline** (`box-shadow: inset 0 0 0 4px #f4f3ee, inset 0 0 0 5px #cfccbf` inside a 1px ink border): the hero copy frame, echoing the sheet neatline.
- **Field focus** (`box-shadow: 0 0 0 3px rgba(45,111,154,0.22)`): input focus ring.

### Named Rules
**The Paper On Paper Rule.** Only a sheet lying over the map gets the sheet lift. Panels inside a band stay flat behind a hairline.

## Shapes

Square-cut paper. Corners are a near-square 2px hairline radius on interactive controls (buttons, inputs, language switch, cabin choices) and zero on frames, panels, plates and the legend. The only round forms are survey stations on the strip map and the status dot. The recurring silhouette is the trig-point triangle: brand mark, map mark, cabin choice marker, gazetteer and list bullets, the "you are here" stop. Lines carry meaning by weight and dash: 1px ink for neatlines, 1.5px ink for cartouche and legend frames, dotted hairline for legend rows, dashed sienna for the route, dashed ink for the road.

## Components

### Buttons
Survey-plain and direct.
- **Shape:** near-square (2px), min-height 48px (40px small, 56px large), 0.6em icon gap, weight 650 at `wdth` 96.
- **Contact (primary):** Dique blue with white text and the contact lift. The only button colour that means "write to us".
- **Hover / Focus:** hover shifts to deep Dique and rises 1px over 200ms on the expo-out curve; focus is a 2px Dique outline at 3px offset (ochre on green grounds).
- **Sheet (secondary):** survey sheet with ink text and the sheet lift, brightening to white on hover; used over the embedded map for directions.
- **Link arrow:** weight 600 text with a 1.5px sienna underline that thickens to 2.5px on hover, arrow nudging 2px.

### Inputs / Fields
- **Style:** white field, 1px warm-grey stroke, 2px radius, 46px tall, tabular figures; uppercase tracked label above.
- **Focus:** stroke turns Dique blue with a 3px translucent blue ring.
- **Error:** brick-red stroke and ring, with the error message in bold error ink above the submit.

### Navigation
- **Edge strip:** sticky 64px (58px under 820px) bar on 94% sheet with blur, hairline bottom border, brand mark in sienna, name at 750 / `wdth` 90 and a wide tracked subtitle.
- **Links:** 0.93rem, weight 550, grey ink; hover and current section turn ink with a 1.5px sienna underline drawing from the left in 260ms.
- **Language switch:** two-segment hairline toggle; the pressed language is ink on sheet, inverted.
- **Mobile:** a hairline menu button opens a full-width sheet drawer by clip-path wipe; links become 1.15rem ruled rows.

### Cartouche (signature)
The sheet's title block carries the booking form. A 1.5px ink frame on sheet with the sheet lift; a ruled head (title, note), three fields (arrival, departure, guests), a full-width contact button, and a ruled foot of definition pairs (labels in uppercase tracked grey ink). Sits bottom-right of the hero sheet; stacks under the map window on phones.

### Neatline and coordinate ticks (signature)
A 1px ink frame inset 14px around the hero sheet, with a hairline inner frame 5px inside. Coordinate ticks (tabular, tracked, on a sheet chip) break the frame on each side; side ticks run vertical and drop under 820px. The map frame around the embedded Google map repeats the device on valley ground.

### Legend (signature)
Amenities are a map legend, defined once. Two columns on bright sheet inside a 1.5px ink frame with an ink column divider; each row is a drawn symbol in a 40×32 ink-framed box (valley-green stroke) beside its name, rows separated by dotted hairlines. Symbols live only here; other lists use triangle bullets.

### Plates and contour plates (signature)
Photographs sit in plates: square-cut, hairline-bordered, cover-fit, with a slow 1.03 zoom on hover. When a photo is missing, the plate becomes a contour plate: a generated contour field in sienna (ochre on dark plates) over plate paper or valley floor, with the intended caption shown as an uppercase label chip at the bottom left. A contour plate never imitates a photograph.

### Cabin choice
Radio cards on the valley band: 2px radius hairline frame in mid-green, an outlined triangle, a condensed count and a description. Selected fills with sheet, text turns ink and the triangle fills solid ink, a trig point set on the map.

### Route rail and route line (signature)
At 1400px and wider, a dashed sienna RP 307 line runs down the left margin, revealed one step ahead of the scroll, with a labelled head and a tabular kilometre chip that rides the reveal to "km 61,7 · La Madrina"; over dark bands the stroke turns ochre and the chip inverts to valley. Narrower screens get a 2px dashed sienna route line under the edge strip with a floating kilometre chip.

### Gazetteer and strip map
The eight cabin names set as a gazetteer: large normal-style Archivo (450, `wdth` 104) with ochre triangle bullets. Nearby places run as a strip map: a dashed ink road with station circles, the "here" stop as a solid ink triangle, distances in condensed sienna figures.

## Do's and Don'ts

### Do:
- **Do** give every section a full-width ground: survey sheet, valley green or highland ochre.
- **Do** use Dique blue (#2d6f9a) only for water on the map and for contact actions, with deep Dique (#1f5577) on hover.
- **Do** set every coordinate, distance, score and kilometre in tabular Archivo figures.
- **Do** carry hierarchy on Archivo's width axis: condensed for names and figures, wide and tracked for place labels.
- **Do** frame with hairlines (1px ink, 1.5px for title blocks and legends) and keep corners at 2px or square.
- **Do** show a contour plate with its caption when a photograph is missing.
- **Do** put long reading copy on sheet panels, even inside coloured bands.

### Don't:
- **Don't** use Dique blue for secondary links, decoration, icons or section grounds.
- **Don't** set anything in italic except water names.
- **Don't** add a second typeface; Archivo's axes cover display, labels and figures.
- **Don't** add amenity icons outside the legend; lists elsewhere use triangle bullets.
- **Don't** fill a missing photo with a stock or generated image; use a contour plate.
- **Don't** add shadows to panels inside a band; only a sheet resting on the map lifts.
- **Don't** round frames or panels beyond the 2px control radius.
