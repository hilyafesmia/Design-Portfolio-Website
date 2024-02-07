---
title: "Partial Pickup Improvement"
metaTitle: "Partial Pickup Improvement"
desc: "Based on Logistics Ops’s record, there were many disputes about the quantity of returned goods every month. To fix this, we decided to improve the pickup and return flow."
metaDesc: "Based on Logistics Ops’s record, there were many disputes about the quantity of returned goods every month. To fix this, we decided to improve the pickup and return flow."
previewImg: "images/GudangAda/Cover.jpg"
company: "GudangAda"
role: "Product Designer"
scope: "Mobile App, Mobile Web"
duration: "Jan 2023"
---

## Overview

GudangAda is an Indonesian-based B2B e-commerce platform that connects small and medium-sized businesses to suppliers and helps with logistics and financing.

In this project, we focused on the pickup and return phase in the delivery process. The main goal of this project is to eliminate disputes between the recorded and the actual number of stock returned to the Seller.

### Users and Audience

- **Sellers**:
  - Marketplace (MP) Sellers: These Sellers have existing offline stores and register with the GudangAda Marketplace app to expand their reach with an online storefront.
  - Toko GudangAda (TGA) Sellers: These online-only stores are owned and operated by GudangAda, offering products exclusively through the Marketplace platform.
- **Drivers**: They deliver items from Sellers to Buyers through GudangAda's logistics network.

### Roles and Responsibilities

Product Designer. My workflow includes creating a research plan, user interviews, and UI design. This project also involves tight collaboration between the Product Manager and Operational Staff.

## Problem Statement

GudangAda currently relies on printed documents to track delivered and returned goods. Following delivery, the Buyer confirms receipt, the Seller acknowledges the return goods and Gross Merchandise Value (GMV), and then the Driver manually inputs this information into the GudangAda Driver App. However, this reliance on manual data entry generates problems:

**_There were over 20 disputes about the quantity of returned goods every month. The number of goods the Seller received differs from the Driver's reported number. A dispute can take days to resolve and require significant human resources as multiple actors can be affected by this problem._**

We assumed that there could be a miss-input by the Driver when transferring information from the document to our app. No one was there to correct them because

- Sellers primarily reference the signed physical documents, often overlooking in-app data.
- Logistics operations cannot monitor individual Driver data entry closely.

This problem was only discovered after the Seller complained.

From that assumption, we tried to fix this by finding out what kind of interaction we needed to build between Seller and Driver so that both would make sure that the reported number was correct.

## Process Summary

![Flow](/images/GudangAda/Flow.jpg "Flow")

## Research

### **Have a chat with the Logistics Ops Team**

Since this problem affects Logistics Ops the most, we decided to learn more about the disputes, how and why they happened, and what they are currently doing to fix this problem.

**Key Finding(s)**

- There are several disputes caused by the Driver inputting incorrectly. However, most disputes come from the Driver ignoring the system's item prioritization during Partial Pickups, leading to discrepancies between delivered and recorded quantities.
  - Partial Pickups: The system automatically adjusts item allocation to prioritize specific Buyers when Sellers provide incomplete orders (e.g., 8 boxes of milk instead of 10).
- Logistics Ops compares signed document photos with database entries to identify discrepancies. If discrepancies exist, Ops manually adjusts the database to match the signed documents.

### **Prioritizing**

Our initial assumption was not spot on. While miss-input played a role, interviews revealed many discrepancies from Drivers ignoring the system's item prioritization during Partial Pickups. To address these findings effectively, we've divided the project into two iterations:

- **First Iteration**: Ensure Drivers consistently follow the intended item prioritization made by the system. We will call this Partial Pickup Improvement project.
- **Second Iteration**: Minimize data entry errors in return processes. We will call this Return Task Improvement project.

## Partial Pickup Improvement

### Research

#### **Seller and Driver visit**

To gain in-depth insights into the pickup and return process, we conducted field visits to two types of Sellers: TGA Sellers and MP Sellers. During these visits, we observed the process firsthand and interviewed the Sellers and the Drivers assigned to their stores.

**Key Finding(s)**

- Drivers and Sellers consistently referred to the printed Surat Jalan document as their primary reference for stock checking and pickup, bypassing the intended Pick List.
  - Surat Jalan: A document that serves as proof of delivery for the Buyers.
  - Pick List: A document that lists down the specific items the Sellers need to pick and their respective quantities.
- Sellers organize items by Buyer store for LIFO loading (last in, first out) to align with Drivers' preferences. The Pick List's lack of store-based grouping made them use Surat Jalan instead.
- During Partial Pickup, Sellers strike through the listed items on the Surat Jalan and writing in the correct quantities. This handwritten modification then serves as confirmation for the buyer, who then signs the document.
- Drivers prefer printed documents over digital interfaces. This leads to sole dependence on Surat Jalan and, thus, a lack of awareness regarding system-generated reprioritization during Partial Pickups.
- Drivers often deviate from system-generated delivery routes, relying on Surat Jalan for Buyer addresses because they believe they have more efficient routes.

### Design

Based on the findings, we would focus on these 2 key areas:

- **Seller**: Enabling Seller to prepare the goods efficiently
- **Driver**: Increase Driver’s adherence to the system’s item prioritization

#### Seller-facing

**Item grouping by Buyer Store**

![Revised Pick List](/images/GudangAda/RevisedPicklist.jpg "Revised Pick List")

Previously, Sellers only had a flat list of all goods to pick up. Now, the Pick List displays items grouped by the buyer after the reprioritization, eliminating the need for the Surat Jalan.

#### Driver-facing

**Download Document Page**

![Download Document Page](/images/GudangAda/DownloadDocumentPage.jpg "Download Document Page")

To prevent Drivers from relying solely on Surat Jalan documents for pickups, we've disabled the ability to download them before the reprioritization. This drives them to use the Driver App, at least until the item verification and reprioritization is done, ensuring real-time updates and improving accuracy. If they really need printed document, we still provide them with a printable Pickup List.

**Pickup Process**

![Print Surat Jalan Step](/images/GudangAda/PrintSJStep.jpg "Print Surat Jalan Step")

Instead of printing beforehand, Drivers will now print the Surat Jalan directly within the pickup process. This allows the document to be generated with up-to-date information, reflecting the number of goods picked up.

![Surat Jalan Document](/images/GudangAda/SJDocument.jpg "Surat Jalan Document")

We've also redesigned the Surat Jalan layout to include the actual number of goods picked up, not just the initial order quantity, eliminating discrepancies with what the buyer receives.

### Testing

Following organization restructuring, we could not proceed with the planned testing and second phase of the project. However, we'd like to share our planned approach for testing.

We would conduct a concept test to identify user feedback on the Partial Pickup Improvement concept and to understand its potential for resolving partial pick-up issues. We would select one TGA seller and two MP Sellers (along with the Drivers assigned for each store) who have experienced data discrepancies due to partial pick-up.

Concept test
Using a concept test with the Buyer’s Pick List Page and Driver’s Driver App, we will gather user perceptions and feedback on the Partial Pickup Improvement concept to assess its potential for solving partial pick-up problems and its usability in improving the item preparation process.
