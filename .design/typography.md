# PDOS: Typography System

The typography hierarchy must remain absolutely consistent. Every page uses the same four font families for specific visual duties.

## Font Scale & Role Map

### 1. Instrument Serif
- **Token**: `--font-instrument-serif` / `.font-display`
- **Role**: Large display headers, large quotes, and italicized statements.
- **Rule**: Never use for standard UI controls or general paragraph blocks.

### 2. Newsreader
- **Token**: `--font-newsreader` / `.font-serif`
- **Role**: Hero headlines, essays, company introductions, and feature titles.
- **Rule**: Retain high readability. Use for narrative sections to establish editorial rhythm.

### 3. Inter Tight
- **Token**: `--font-inter-tight` / `.font-sans`
- **Role**: UI labels, navigation controls, cards, body copy, and button text.
- **Rule**: Set tracking and line-height values cleanly to prevent UI compression.

### 4. JetBrains Mono
- **Token**: `--font-jetbrains-mono` / `.font-mono`
- **Role**: Metadata, issue numbers, dates, blueprint codes, system labels, and research IDs.
- **Rule**: Set uppercase and letter-spacing for sub-headers and labels.
