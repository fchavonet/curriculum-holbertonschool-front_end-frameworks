# Style guide

Visual identity and UI guidelines for the Agentic AI landing page.

## 1. Visual identity

The interface follows a modern AI-native visual direction inspired by futuristic SaaS platforms, developer-oriented tools, and immersive dark user interfaces. The overall aesthetic combines strong typography, subtle neon accents, layered depth effects, and spacious layouts to create a premium and modern experience. The design aims to remain clean, readable, technical, and visually immersive while preserving a strong focus on clarity and usability.

## 2. Color palette

### Primary colors

<div style="display:flex; flex-wrap:wrap; gap:16px;">

<div style="width:160px; padding:16px; color:#f8fafc; border:1px solid #1e293b; border-radius:16px; background:#020617;">
<strong>Slate 950</strong><br>
<code>#020617</code><br>
<code>bg-slate-950</code>
</div>

<div style="width:160px; padding:16px; color:#f8fafc; border:1px solid #1e293b; border-radius:16px; background:#000000;">
<strong>Black</strong><br>
<code>#000000</code><br>
<code>bg-black</code>
</div>

<div style="width:160px; padding:16px; border-radius:16px; background:#8B5CF6; color:white;">
<strong>Violet 500</strong><br>
<code>#8B5CF6</code><br>
<code>bg-violet-500</code>
</div>

<div style="width:160px; padding:16px; border-radius:16px; background:#C4B5FD; color:#020617;">
<strong>Violet 300</strong><br>
<code>#C4B5FD</code><br>
<code>text-violet-300</code>
</div>

</div>

### Text colors

<div style="display:flex; flex-wrap:wrap; gap:16px;">

<div style="width:160px; padding:16px; border-radius:16px; background:#F8FAFC; color:#020617;">
<strong>Slate 50</strong><br>
<code>#F8FAFC</code>
<code>text-slate-50</code>
</div>

<div style="width:160px; padding:16px; border-radius:16px; background:#CBD5E1; color:#020617;">
<strong>Slate 300</strong><br>
<code>#CBD5E1</code>
<code>text-slate-300</code>
</div>

<div style="width:160px; padding:16px; border-radius:16px; background:#64748B; color:white;">
<strong>Slate 500</strong><br>
<code>#64748B</code>
<code>text-slate-500</code>
</div>

</div>

## 3. Typography

### Hero title

<div style="padding:32px; text-align:center; border:1px solid #1e293b; border-radius:24px; background:#020617;">
<p style="margin:0; font-size:56px; font-weight:900; letter-spacing:-0.04em; line-height:0.95; color:#F8FAFC;">
Build smarter workflows<br>
<span style="color:#C4B5FD;">with Agentic AI</span>
</p>
</div>

#### Tailwind classes

```html
text-5xl md:text-7xl font-black tracking-tight leading-none
```

### Section titles

<div style="padding:32px; text-align:center; border:1px solid #1e293b; border-radius:24px; background:#000000;">
<p style="margin:0; font-size:40px; font-weight:900; letter-spacing:-0.03em; line-height:1; color:#F8FAFC;">
Everything You Need to Build<br>
<span style="color:#C4B5FD;">With powerful AI agents</span>
</p>
</div>

#### Tailwind classes

```html
text-4xl md:text-5xl font-black tracking-tight leading-none
```

### Body text

<div style="max-width:640px; padding:24px; text-align:start; color:#CBD5E1; border:1px solid #1e293b; border-radius:20px; background:#020617;">
Agentic AI refers to artificial intelligence systems designed to pursue goals, make decisions, use tools, and adapt their actions across multiple steps.
</div>

#### Tailwind classes

```html
text-sm md:text-base text-slate-300
```

## 4. Layout & spacing

### Container width

```html
max-w-6xl mx-auto px-6
```

### Section spacing

| Usage            | Classes       |
|------------------|---------------|
| Hero section     | `pt-36 pb-24` |
| Standard section | `py-24`       |
| Grid spacing     | `gap-8`       |
| Large spacing    | `mt-12`       |

### Responsive grids

#### Statistics grid

```html
grid grid-cols-2 md:grid-cols-4 gap-8
```

#### Features grid

```html
grid md:grid-cols-3 gap-8
```

#### Gallery grid

```html
grid sm:grid-cols-2 lg:grid-cols-3 gap-8
```

## 5. Buttons

### Primary button

<div style="display:inline-block; margin-top:24px; padding:10px 16px; font-weight:600; color:white; border-radius:6px; background:#8B5CF6; box-shadow:0 10px 24px rgba(139,92,246,.35);">
Enroll now →
</div>

#### Tailwind classes

```html
px-4 py-2 font-semibold rounded-md bg-violet-500 hover:bg-violet-600 shadow-lg shadow-violet-500/40
```

### Secondary button

<div style="display:inline-block; margin-top:24px; padding:10px 16px; font-weight:600; color:#F8FAFC; border:1px solid #1e293b; border-radius:6px; background:#020617;">
Need more information?
</div>

#### Tailwind classes

```html
px-4 py-2 font-semibold rounded-md border border-slate-800 bg-slate-950 hover:bg-slate-900
```

## 6. Cards

### Statistics card

<div style="max-width:220px; margin-top:24px; padding:24px; text-align:center; border:1px solid #1e293b; border-radius:16px; background:#020617; box-shadow:0 20px 40px rgba(2,6,23,.4);">

<strong style="display:block; font-size:40px; color:#C4B5FD;">
10K+
</strong>

<span style="display:block; margin-top:4px; font-size:12px; color:#64748B;">
Active agents
</span>

</div>

#### Tailwind classes

```html
p-6 rounded-xl border border-slate-800 bg-slate-950 shadow-xl shadow-slate-950/40
```

### Feature card

<div style="max-width:320px; padding:32px; color:#F8FAFC; border:1px solid #1e293b; border-radius:24px; background:#020617; box-shadow:0 20px 40px rgba(2,6,23,.4); margin-top:24px;">

<div style="width:32px; height:32px; margin-bottom:16px; display:flex; justify-content:center; align-items:center; border-radius:8px; background:#8B5CF6; box-shadow:0 10px 24px rgba(139,92,246,.4);">
◎
</div>

<strong>Autonomous agents</strong>

<p style="margin-top:12px; color:#64748B;">
Deploy self-sufficient AI agents that can work 24/7 without supervision.
</p>

</div>

#### Tailwind classes

```html
p-8 rounded-3xl border border-slate-800 bg-slate-950 shadow-xl shadow-slate-950/40
```

## 7. Forms

### Input fields

<div style="max-width:480px; margin-top:24px; padding:32px; border:1px solid #1e293b; border-radius:24px; background:#020617;">

<label style="display:block; margin-bottom:8px; color:#F8FAFC; font-weight:600;">
Email
</label>

<input placeholder="you@example.com" style="width:100%; box-sizing:border-box; padding:10px 16px; color:#F8FAFC; border-radius:6px; border:1px solid #1e293b; background:#000000;">

</div>

#### Tailwind classes

```html
px-4
py-2
text-slate-50
rounded-md
border
border-slate-800
bg-black
placeholder:text-slate-500
focus:border-violet-500
focus:outline-none
```

## 8. Badges

### Eyebrow

<div style="display:inline-flex; align-items:center; gap:8px; margin-top:24px; padding:8px 16px; border-radius:999px; background:rgba(139,92,246,.1); color:#C4B5FD; border:1px solid rgba(139,92,246,.2); font-size:12px;">
<span style="font-size:8px;">✦</span>
The future of coding
<span style="font-size:8px;">✦</span>
</div>

#### Tailwind classes

```html
px-4
py-2
text-xs
text-violet-300
rounded-full
border border-violet-500/20
bg-violet-500/10
```

# 9. Effects & shadows

## Violet glow

```html
shadow-lg shadow-violet-500/40
```

Used for:

- Primary buttons.
- Feature icons.
- Brand identity.
- Highlighted UI elements.

## Surface shadows

```html
shadow-xl shadow-slate-950/40
```

Used for:

- Cards.
- Panels.
- Statistics.
- Forms.

# 10. Background effects

## Gradient Background

The hero and CTA sections combine:

- Radial violet glow.
- Radial blue glow.
- Dark gradients.
- Grid overlays.
- Depth vignettes.

## Grid Overlay

### Tailwind classes

```html
bg-[linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)]
bg-[size:72px_72px]
opacity-30
```

# 11. Border radius

| Usage            | Classes        |
|------------------|----------------|
| Buttons          | `rounded-md`   |
| Icon containers  | `rounded-lg`   |
| Statistics cards | `rounded-xl`   |
| Feature cards    | `rounded-3xl`  |
| Badges           | `rounded-full` |

# 12. Responsive design

The project follows a **mobile-first** approach.

## Main breakpoints

| Breakpoint | Usage                    |
|------------|--------------------------|
| `sm:`      | Small layout adjustments |
| `md:`      | Tablet & desktop layouts |
| `lg:`      | Large content grids      |

# 13. Accessibility

The interface should:

- Preserve readable contrast.
- Keep visible hover states.
- Use semantic HTML.
- Associate labels with inputs.
- Remain keyboard accessible.
- Keep readable spacing and typography.

# 14. Overall UI philosophy

The UI should remain:

- Minimal.
- Readable.
- Spacious.
- Immersive.
- Modern.
- Consistent.

The violet accent color should be used carefully to preserve hierarchy and visual impact.