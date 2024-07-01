---
title: "Partial Pickup Improvement"
metaTitle: "Partial Pickup Improvement"
desc: "Based on Marketplace Ops’s record, there were many disputes about the quantity of returned items to Seller every month. Hence, to eliminate data discrepancies, we decided to improve the pickup and return flow of the Driver App."
metaDesc: ""
previewImg: "images/GudangAda/Cover.jpg"
company: "GudangAda"
role: "Product Designer"
scope: "Mobile App, Mobile Web"
duration: "Jan 2023"
---

## <a id="overview" style="position:relative;top:-200px"></a> Overview

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

GudangAda currently relies on printed documents to track delivered and returned items. Following delivery, the Buyer confirms receipt, the Seller acknowledges the return items and Gross Merchandise Value (GMV), and then the Driver manually inputs this information into the GudangAda Driver App. However, this reliance on manual data entry generates problems:

**_There were over 20 disputes about the quantity of returned items every month. The number of items the Seller received differs from the Driver's reported number. A dispute can take days to resolve and require significant human resources as multiple actors can be affected by this problem._**

We assumed that there could be a miss-input by the Driver when transferring information from the document to our app. No one was there to correct them because

- Sellers primarily reference the signed physical documents, often overlooking in-app data.
- Ops cannot monitor individual Driver data entry closely.

This problem was only discovered after the Seller complained to Marketplace Ops.

From that assumption, we tried to fix this by finding out what kind of interaction we needed to provide between Seller and Driver so that both would make sure that the reported number was correct.

## <a id="process" style="position:relative;top:-200px"></a> Process Summary

![Flow](/images/GudangAda/Flow.jpg "Flow")

## Research

> How might we eliminate discrepancies between the reported and the actual number of items returned?

### **Have a chat with the Logistics Ops Team**

Since this problem involves Logistics Ops the most, we decided to learn more about the disputes, how and why they happened, and what they are currently doing to fix this problem.

**Key Finding(s)**

- There are several disputes caused by the Driver inputting incorrectly. However, most disputes come from the Driver ignoring the system's item prioritization during Partial Pickup, leading to discrepancies between delivered and recorded quantities.
  - Partial Pickup: The system automatically adjusts item allocation to prioritize specific Buyers when Sellers provide incomplete orders (e.g., 8 boxes of milk instead of 10).
- Logistics Ops compares signed document photos with database entries to identify discrepancies. If discrepancies exist, Ops manually adjusts the database to match the signed documents.

### **Prioritizing**

Our initial assumption was not spot on. While miss-input played a role, interviews revealed many discrepancies from Drivers ignoring the system's item prioritization during Partial Pickup. To address these findings effectively, we've divided the project into two iterations:

- **First Iteration**: Ensure Drivers consistently follow the intended item prioritization made by the system. We will call this Partial Pickup Improvement project.
- **Second Iteration**: Minimize data entry errors in return processes. We will call this Return Task Improvement project.

## Partial Pickup Improvement

### Research

> How might we help Drivers to adhere to the intended item prioritization made by the system?

#### **Seller and Driver visit**

To gain in-depth insights into the pickup and return process, we conducted field visits to two types of Sellers: TGA Sellers and MP Sellers. During these visits, we observed the process firsthand and interviewed the Sellers and the Drivers assigned to their stores.

**Key Finding(s)**

- Drivers and Sellers consistently referred to the printed Surat Jalan document as their primary reference for stock checking and pickup, bypassing the intended Pick List.
  - Surat Jalan: A document that serves as proof of delivery for the Buyers.
  - Pick List: A document that lists down the specific items the Sellers need to pick and their respective quantities.
- Sellers organize items by Buyer store for LIFO loading (last in, first out) to align with Drivers' preferences. The Pick List's lack of store-based grouping made them use Surat Jalan instead.
- During Partial Pickup, Sellers strike through the listed items on the Surat Jalan and writing in the correct quantities. This handwritten modification then serves as confirmation for the Buyer, who then signs the document.
- Drivers prefer printed documents over digital interfaces. This leads to sole dependence on Surat Jalan and, thus, a lack of awareness regarding system-generated reprioritization during Partial Pickup.
- Drivers often deviate from system-generated delivery routes, relying on Surat Jalan for Buyer addresses because they believe they have more efficient routes.

**Below is the simplified graphic of the problem based on what we know from Logistics Ops, Sellers and Drivers**

![Seller and Driver Behavior](/images/GudangAda/SellerDriverBehavior.jpg "Seller and Driver Behavior")

### Design

Based on the findings, we would focus on these 2 key areas:

- **Seller**: Enabling Seller to prepare the items efficiently
- **Driver**: Increase Driver’s adherence to the system’s item prioritization

#### Seller-facing

**Item grouping by Buyer Store**

![Existing Pick List](/images/GudangAda/ExistingPicklist.jpg "Existing Pick List")

Sellers only had a flat list of all items to pick up. Now, the digital Pick List also displays items grouped by the Buyer after the reprioritization, eliminating the need for the Surat Jalan because the Pick List has what Surat Jalan offers as well.

![Revised Pick List](/images/GudangAda/RevisedPicklist.jpg "Revised Pick List")

#### Driver-facing

**Download Document Page**

![Download Document Page](/images/GudangAda/DownloadDocumentPage.jpg "Download Document Page")

To prevent Drivers from relying solely on Surat Jalan documents for pickup, we've disabled the ability to download them before the reprioritization. This drives them to use the Driver App, at least until the item verification and reprioritization is done. If they really need printed document, we still provide them with a printable Pick List.

**Pickup Process**

![Existing Design](/images/GudangAda/BeforePrintSJ.jpg "Existing Design")

Instead of printing beforehand, Drivers will now print the Surat Jalan directly within the pickup process. This allows the document to be generated with up-to-date information, reflecting the number of items picked up.

![Print Surat Jalan Step](/images/GudangAda/PrintSJStep.jpg "Print Surat Jalan Step")

We've also redesigned the Surat Jalan layout to include the actual number of items picked up, not just the initial order quantity, eliminating the need to strike though manually.

![Surat Jalan Document](/images/GudangAda/SJDocument.jpg "Surat Jalan Document")

### Testing

Following organization restructuring, we could not proceed with the planned testing and second phase of the project (Return Task Improvement). However, we'd like to share our planned approach for testing.

We would conduct a concept test to identify user feedback on the Partial Pickup Improvement concept and to understand its potential for resolving Partial Pickup issues and its usability in improving the item preparation process. We would select one TGA seller and two MP Sellers (along with the Drivers assigned for each store) who have experienced data discrepancies due to Partial Pickup.

## <a id="result" style="position:relative;top:-200px"></a> Personal Takeaways

### Designing for Drivers

The thing about designing for GudangAda's Drivers is that we often assume things based on what we know, which in most cases are drivers near us: online motorbike/taxi drivers. However, although they are both categorized as drivers, we can't just assume that their workload and behavior are the same.

As we followed the Drivers doing their jobs, this assumption about our Drivers' workflow proved incomplete and misleading. Through the visit, we observed that they face a unique challenge: Their work is physically challenging and borderline dangerous (for their phones). They load and unload heavy items in various locations, making phone use impractical and risky. We now understand why they prefer looking at the printed document instead of the Driver App.

However, we need them to understand that, especially during Partial Pickup, they must follow the reprioritization done by the system which is only updated on the app. Bridging this online-to-offline behavior is the challenge we really hoped we could solve. This project shows the importance of going beyond assumptions and actively try to understand user context to create a balance between meeting the tech expectations and also benefiting the users.
