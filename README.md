# Lightning Console Workspace Framework

A Salesforce Lightning Web Component project that demonstrates Lightning Console tab navigation using the Workspace API.

## Overview

This project shows how Salesforce developers can control console workspace tabs from an LWC. It is useful for service console, call center, and support applications where agents need to open multiple records or list views in separate console tabs.

## Features

- Open Account list in a new console tab
- Open Case list in a new console tab
- Rename the current focused tab
- Set console tab icons
- Utility bar compatible
- Error handling for non-console apps

## Tech Stack

- Salesforce Lightning Web Components
- Lightning Console
- Workspace API
- SLDS
- Salesforce DX

## Project Structure

```txt
force-app/main/default/lwc/consoleWorkspaceLauncher
docs
screenshots
README.md
```

## Main Component

```txt
consoleWorkspaceLauncher
```

## How It Works

```txt
User clicks launcher button
        ↓
LWC checks if the app is a Console app
        ↓
Workspace API opens a new tab
        ↓
LWC updates tab label and icon
```

## Setup Steps

1. Deploy this project to Salesforce.
2. Open Setup.
3. Go to App Manager.
4. Open a Lightning Console App.
5. Add `Console Workspace Launcher` to the Utility Bar or App Page.
6. Open the Console App.
7. Click the launcher buttons.

## Important Note

This component works only inside a Salesforce Lightning Console app. If used outside a console app, it displays an error message.

## Business Use Case

In enterprise service applications, agents often need to open search pages, case records, account records, and related data in separate tabs. This project demonstrates how to implement that console-style navigation pattern using LWC.

## Future Enhancements

- Open specific record tabs dynamically
- Open Visualforce pages in console tabs
- Add search-driven navigation
- Add parent tab and subtab handling
- Add custom utility bar launcher
- Integrate with member search component
