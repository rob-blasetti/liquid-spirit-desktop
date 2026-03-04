# Liquid Spirit Desktop — Styleguide Gap Report

Branch: `feat/styleguide-integration`
Date: 2026-03-04
Goal: evaluate what blocks a true "styleguide-only UI" build.

## What is already styleguide-driven

- Typography primitives (`Typography`)
- Buttons (`Button`)
- Form controls (`Input`, `Select`, `Checkbox`)
- Card primitive (`CTACard`) now backing app `Card`, list cards, stat cards, and feed cards
- Section headers migrated to styleguide typography

## Remaining custom UI surface (gaps)

### 1) App shell / navigation layout
Current custom classes:
- `shell`, `sidebar`, `brand`, `nav-link`, `content`, `topbar`, `menu-toggle`, `sidebar-backdrop`, `page`

Gap:
- No styleguide primitive for desktop app chrome (left rail + top bar + responsive drawer behavior)

Needed styleguide component(s):
- `AppFrame` (sidebar + header + content)
- `SideNav` / `NavItem` (active states, hover, compact mode)
- `TopBar` (slot for left trigger + title + actions)

---

### 2) Data table pattern
Current custom classes:
- `table-wrap`, `table`, `empty-cell`

Gap:
- No styleguide table system for admin/data-heavy screens

Needed styleguide component(s):
- `Table`, `TableHead`, `TableBody`, `TableRow`, `TableCell`
- Empty state row support
- Sticky head + responsive collapse variant

---

### 3) Status / semantic chips
Current custom classes:
- `status-pill` variants: `active`, `pending`, `inactive`

Gap:
- No semantic status tokenized component

Needed styleguide component(s):
- `StatusBadge` with variants (`success`, `warning`, `neutral`, `danger`, `info`)
- Tokenized color mapping

---

### 4) List row / split row pattern
Current custom classes:
- `list-stack`, `list-row`, `decision-row`, `approval-item`, `approval-main`, `approval-actions`

Gap:
- No first-class list/row primitives for settings/admin records

Needed styleguide component(s):
- `Stack`
- `List`
- `ListItem`
- `Inline` / `SplitRow` (left content + right actions)

---

### 5) Grid layout primitives
Current custom classes:
- `dashboard-grid`, `stats-grid`, `cards-grid`, `filters-bar`

Gap:
- Layout still requires custom app CSS for spacing/breakpoints

Needed styleguide component(s):
- `Grid` (responsive columns)
- `Cluster` / `Wrap` for filter bars and action groups

---

### 6) Rich media card layout
Current custom classes:
- legacy `ls-card-*` classes (media region, fallback, chip)

Gap:
- `CTACard` works, but no image/media slot variants for feed/event/activity cards

Needed styleguide component(s):
- `ContentCard` with optional media slot (`cover`, `thumb`, `none`)
- Metadata slots (`tag`, `meta`, `actions`)

---

### 7) Empty / loading / error states
Current custom classes:
- `empty-text`

Gap:
- no styleguide-level `EmptyState`, `ErrorState`, `Skeleton`

Needed styleguide component(s):
- `EmptyState`
- `Alert` / `InlineError`
- `Skeleton` loaders

## Priority order for styleguide improvements

1. `AppFrame` + `SideNav` + `TopBar`
2. `Grid` + `Stack` + `SplitRow`
3. `StatusBadge`
4. `Table` system
5. `ContentCard` media variant
6. Empty/error/loading states

## Success criteria for "styleguide-only"

You can remove most app-level structural CSS and build all pages using:
- Styleguide primitives only
- Tokenized spacing/typography/colors
- Responsive behavior from styleguide components

When this is achieved, `src/index.css` should become minimal (resets + tiny overrides only).
