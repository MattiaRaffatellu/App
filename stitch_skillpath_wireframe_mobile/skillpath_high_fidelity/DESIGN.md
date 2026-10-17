---
name: SkillPath Clean Minimalist
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#464555'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#777587'
  outline-variant: '#c7c4d8'
  surface-tint: '#4d44e3'
  primary: '#3525cd'
  on-primary: '#ffffff'
  primary-container: '#4f46e5'
  on-primary-container: '#dad7ff'
  inverse-primary: '#c3c0ff'
  secondary: '#006b5f'
  on-secondary: '#ffffff'
  secondary-container: '#6df5e1'
  on-secondary-container: '#006f64'
  tertiary: '#7e3000'
  on-tertiary: '#ffffff'
  tertiary-container: '#a44100'
  on-tertiary-container: '#ffd2be'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2dfff'
  primary-fixed-dim: '#c3c0ff'
  on-primary-fixed: '#0f0069'
  on-primary-fixed-variant: '#3323cc'
  secondary-fixed: '#71f8e4'
  secondary-fixed-dim: '#4fdbc8'
  on-secondary-fixed: '#00201c'
  on-secondary-fixed-variant: '#005048'
  tertiary-fixed: '#ffdbcc'
  tertiary-fixed-dim: '#ffb695'
  on-tertiary-fixed: '#351000'
  on-tertiary-fixed-variant: '#7b2f00'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.015em
  headline-xl-mobile:
    fontFamily: Inter
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: 0em
  metric-value:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  gutter-lg: 2rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

This design system targets modern professionals, learners, and analysts who require frictionless visual tracking of skills, progress, and performance data. The brand personality is precise, lucid, and quiet yet authoritative—prioritizing clarity of data over ornamental visual noise.

The aesthetic marries **Minimalism** with contemporary **Corporate / Modern** product design:
- Crisp white content containers elevated over cool slate canvases.
- High typographic legibility prioritizing scannable metrics and hierarchical clarity.
- Restrained color application where saturated indigo and teal strictly signal interaction, focus, or forward momentum.
- A sense of calm, calculated momentum that reduces cognitive fatigue across metric-heavy dashboards and analytical tracking views.

## Colors

The palette is engineered for high data-density dashboards with distinct semantic boundaries:

- **Primary (`#4F46E5`)**: Electric Indigo. Applied to primary CTAs, active tab indicators, selected states, and dominant chart trends.
- **Secondary / Accent (`#14B8A6`)**: Bright Teal. Dedicated to positive milestones, skill acquisition markers, completion indicators, and secondary metric comparisons.
- **Canvas (`#F8FAFC`)**: Slate 50. The foundational backdrop that allows pure white components to assert soft physical presence without heavy borders.
- **Surfaces (`#FFFFFF`)**: Pure White. Strictly for metric cards, sidebars, modals, tables, and layered cards.
- **Text Primary (`#111827`)**: Slate 900. High-contrast, sharp typographic color for metric numbers, headings, and critical labels.
- **Text Secondary (`#64748B`)**: Slate 500. Subdued tone for chart axes, metadata, table column headers, and secondary descriptors.
- **Border (`#E2E8F0`)**: Slate 200. Deliberately light, hairline divider token used to establish clean structure without visual clutter.

## Typography

Typography relies entirely on **Inter** to ensure maximum computational clarity and cross-device consistency. 

- Use tabular numbers (`font-variant-numeric: tabular-nums`) across all analytical tables, dashboard metrics, timestamp markers, and progress percentages.
- `metric-value` is the primary scale for high-level KPI tiles, styled with tight letter-spacing for immediate visual absorption.
- `label-sm` utilizes uppercase styling when deployed as chart axis categories, card eyebrow labels, and status badges.
- Avoid loose tracking on headlines; negative letter-spacing ensures headers stay compact and architectural.

## Layout & Spacing

The layout model is founded on a 12-column fluid grid system pinned to a maximum container width of 1440px on large viewports, reflowing systematically to a 6-column grid on tablets and a 4-column stack on mobile screens.

- **Desktop (>= 1024px)**: 12-column layout with `gutter-lg` (2rem) and `margin` (2rem). Metric cards default to 3-column (4 cards per row) or 4-column (3 cards per row) spans.
- **Tablet (768px – 1023px)**: 6-column layout with `gutter` (1.5rem). Metric grids reflow to pairs of 2-column or 3-column elements.
- **Mobile (< 768px)**: 4-column single-axis stack with `gutter-sm` (1rem) and `margin-mobile` (1rem). High-density charts collapse horizontal overflow into horizontally scrollable containers or summarized list indicators.
- Internal padding for all metric tiles and cards maintains consistent horizontal and vertical balance using `space-lg` (1.5rem), reducing to `space-md` (1rem) on compact cards.

## Elevation & Depth

Visual hierarchy uses a refined hybrid of **low-contrast outlines** and **subtle ambient shadows**:

- **Level 0 (Canvas)**: Background surface `#F8FAFC` carries no elevation.
- **Level 1 (Cards & Data Panels)**: Pure white `#FFFFFF` resting on the canvas, delineated by a single `#E2E8F0` border and a faint, ambient drop shadow (`box-shadow: 0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.02)`).
- **Level 2 (Dropdowns, Popovers & Hover Cards)**: Elevated white cards featuring `#E2E8F0` border with expanded ambient dispersal (`box-shadow: 0 10px 15px -3px rgba(15, 23, 42, 0.05), 0 4px 6px -4px rgba(15, 23, 42, 0.03)`).
- **Level 3 (Modals & Command Palettes)**: Floating surfaces flanked by a faint scrim (`rgba(15, 23, 42, 0.3)`) paired with high-radius soft elevation (`box-shadow: 0 20px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.03)`).
- Shadows avoid warm or dark pitch tones; all drops are tinted with cold Slate (`rgba(15, 23, 42, *)`) to maintain an airy, technical feel.

## Shapes

The design system implements balanced, modern rounded geometry (Level 2):

- **Default UI Containers (`0.5rem` / 8px)**: Applied to input fields, buttons, dropdown triggers, list row states, and tooltips.
- **Cards & Data Panels (`1rem` / 16px)**: Applied to all standard metric tiles, analytical charts, modal windows, and table master containers.
- **Pill Geometry (`9999px`)**: Reserved exclusively for chips, filter tags, progress bars, and operational status indicators (e.g., active, completed, archived).
- Never mix raw sharp corners (0px) into primary UI shells to ensure a soft, humanized tool experience.

## Components

### Buttons
- **Primary**: Solid `#4F46E5` fill, white `#FFFFFF` text, `0.5rem` radius, hover state `#4338CA`. Active state `#3730A3`. Focus state features a 2px offset ring in `#4F46E5`.
- **Secondary**: `#FFFFFF` background with 1px `#E2E8F0` border, `#111827` text. Hover changes background to `#F8FAFC` and border to `#CBD5E1`.
- **Tertiary / Ghost**: Transparent fill, `#64748B` text, turning to `#111827` and `#F1F5F9` on hover.

### Chips & Badges
- **Status Chips**: Fully pill-shaped (`9999px`) with 6px vertical and 12px horizontal padding.
- **Completed / Positive**: `#CCFBF1` background (Teal tint) with `#0F766E` text.
- **In Progress**: `#EEF2FF` background (Indigo tint) with `#4338CA` text.
- **Neutral / Meta**: `#F1F5F9` background with `#475569` text.

### Metric Cards & Dashboard Panels
- White `#FFFFFF` foundation, `1rem` radius, 1px `#E2E8F0` perimeter border, and `space-lg` inner padding.
- Eyebrow header styled in `label-sm` with `#64748B` uppercase tracking.
- Metric readout uses `metric-value` in `#111827`, aligned beside an inline delta pill showing positive trends in `#14B8A6` or neutral/negative movements.
- Top or bottom chart accents use hairline trendlines without heavy grid noise.

### Charts & Data Visualizations
- Background grid lines use `#F1F5F9` dashed strokes (1px width).
- Primary metrics plotted with `#4F46E5` stroke (2px thickness) and a subtle vertical linear gradient fading to `#FFFFFF` at 0% opacity.
- Target or secondary comparisons use `#14B8A6` stroke or dot markers.
- Tooltips display as mini-floating Level 2 white cards with sharp `#111827` metrics and `#64748B` labels.

### Form Inputs
- 1px `#E2E8F0` border on `#FFFFFF` background, `0.5rem` radius, `0.5rem` top/bottom and `0.75rem` left/right padding.
- Text uses `body-md` in `#111827`. Placeholder text in `#94A3B8`.
- Focus state brings a 1px border of `#4F46E5` and a 3px ring of `#E0E7FF`.

### Checkboxes & Radio Buttons
- 16px square (checkbox) or circle (radio) with 1px `#CBD5E1` border.
- Selected state fills with `#4F46E5`, displaying a crisp white `#FFFFFF` tick or center dot. Focus ring mirrors text input focus.

### Progress Bars
- Pill-shaped (`9999px`) track with a height of 6px or 8px, filled with `#F1F5F9`.
- Progress indicator renders in solid `#14B8A6` for completion or `#4F46E5` for active journey phases.