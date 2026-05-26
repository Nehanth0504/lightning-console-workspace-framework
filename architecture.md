# Lightning Console Workspace Architecture

## Purpose

This project demonstrates how a Lightning Web Component can interact with the Salesforce Lightning Console workspace.

## Flow

User clicks button
    ↓
LWC calls Workspace API
    ↓
Console opens new tab
    ↓
Tab label and icon are updated

## Key Salesforce Concepts

- Lightning Console Apps
- Utility Bar Components
- Lightning Web Components
- Workspace API
- Page References
- Console tab management

## Supported Actions

- Open Account list in a new console tab
- Open Case list in a new console tab
- Rename focused console tab
- Update console tab icon

## Enterprise Use Case

Call center applications often require users to search, review, and open multiple records without losing context. This project demonstrates the technical foundation for that behavior.
