---
title: "Improving the way drivers pick up and record deliveries"
metaTitle: "Improving the way drivers pick up and record deliveries"
desc: "Based on Marketplace Ops’s record, there were many disputes about the quantity of returned items to Seller every month. Hence, to eliminate data discrepancies, we decided to improve the pickup and return flow of the Driver App."
metaDesc: ""
previewImg: "images/GudangAda/Cover.jpg"
company: "GudangAda"
role: "Product Designer"
scope: "Mobile App, Mobile Web"
duration: "Jan 2023"
what: "Improved the pickup and return flow in GudangAda’s Driver App to reduce discrepancies in the recorded quantity of returned items."
why: "Frequent discrepancies between recorded and actual data. Key issues included reliance on printed documents, ignoring app-based priorities, and manual entry errors."
impact: "Enhance drivers' adherence to the system’s item prioritization. Though testing was postponed due to restructuring, the solution was aimed to reduce the monthly disputes by 50%."
---

###### My Role

## Design Research & Ideation

I planned and executed the design research for this project, conducting user interviews, analyzing the findings, and identifying key opportunity areas and solutions. I collaborated with the Product Manager and Logistics Ops representative to prioritize these ideas effectively.

## Coordination with Cross-Functional Team

I worked closely with the Product Manager and Operations team to ensure that the design aligned with logistical requirements and feasibility.

## Prototyping & Testing

I developed the prototype from low to high fidelity, with plans to refine it based on user feedback. Additionally, I collaborated closely with engineers to ensure feasibility and make necessary adjustments throughout the process.

###### Background

## GudangAda launched a Driver App designed to track drivers and their deliveries while assisting them with navigation along their delivery routes.

The Driver App enables drivers to monitor their attendance, view their list of delivery tasks for the day—complete with location details and contact numbers for each buyer and seller—and log each completed delivery throughout the day.

![A video advertising Driver App to potential logistics partner](/images/GudangAda/DriverAppPromo.png "A video advertising Driver App to potential logistics partner")

<figcaption style="text-align:center">A video advertising Driver App to potential logistics partner</figcaption>

## Return Task: if a buyer chooses not to accept their delivery, the order will be sent back to the seller

GudangAda currently relies on printed documents to track delivered and returned items. Drivers record return quantities manually in the Driver App based on physical documents signed by sellers and buyers.

## Partial Pickup: when a seller lacks the full quantity of items needed for delivery

The Driver App system will automatically reallocate items to prioritize certain buyers in cases of a partial pickup by the seller (e.g. when only 8 boxes of milk are available instead of the 10 ordered). Both the driver and seller are required to adhere to this automated allocation.

::: highlight

###### <a id="objective" style="position:relative;top:-120px"></a> Project Objective

## Eliminate discrepancies between the recorded and actual number of items returned.

We noticed over 20 disputes monthly due to discrepancies between recorded and actual return quantities, requiring intensive time and human resources to resolve. We hypothesized that there could be a miss-input by the Driver when transferring information from the document to our app.
:::

###### User Research

## I initiated a discussion with the Logistics Operations team to learn more about the disputes

Since this problem involves Logistics Ops the most, I decided to learn more about the disputes, how and why they happened, and what they are currently doing to fix this problem.

- There are several disputes caused by the Driver inputting incorrectly.
- Most disputes come from the Driver ignoring the system's item prioritization during Partial Pickup, leading to discrepancies between delivered and recorded quantities.

## I conducted field visits to observe and shadow sellers and drivers in their daily routines

To gain in-depth insights into the pickup and return process, I conducted field visits with the Product Manager to 2 types of sellers: TGA sellers and MP sellers. During these visits, we observed the process firsthand and interviewed the sellers and the drivers assigned to their stores.

| Drivers don’t feel the need to use the Driver App other than to input delivery                                                             | The existing Pick List document lacked the necessary store-based grouping log                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Drivers don’t follow the system-generated delivery routes because they believe they know more efficient routes.                            | Sellers need store-based grouping because they organize items by buyer store for LIFO loading (last in, first out) to align with drivers' preferences. |
| Since drivers don’t need the app to navigate around, they just use the address stated in the printed Surat Jalan.                          | Because of point a, drivers and sellers relied on printed Surat Jalan documents rather than in-app Pick List for accuracy checks.                      |
| Sole dependence on printed Surat Jalan causes drivers to lack awareness regarding system-generated reprioritization during Partial Pickup. |                                                                                                                                                        |

**Below is the simplified graphic of the problem based on what we know from Logistics Ops, Sellers and Drivers**

![Seller and Driver Behavior](/images/GudangAda/SellerDriverBehavior.jpg "Seller and Driver Behavior")

::: highlight

###### Strategy

## Ensure drivers consistently follow the intended item prioritization made by the system.

Our initial assumption was not spot on. While miss-input played a role, research revealed many discrepancies from drivers ignoring the system's item prioritization during Partial Pickup. To address these findings effectively, I’ve divided the project into 2 iterations:

- Partial Pickup Improvement: Ensure drivers consistently follow the intended item prioritization made by the system.
- Return Task Improvement: Minimize data entry errors in return processes (to be developed in a subsequent project phase).

:::

###### <a id="design" style="position:relative;top:-120px"></a> Ideation and Concepting

## Enabling seller to prepare the items efficiently

![Existing Pick List](/images/GudangAda/ExistingPicklist.jpg "Existing Pick List")

The digital Pick List is now grouped by buyer stores, replacing the need for printed documents during pickup preparation.

![Revised Pick List](/images/GudangAda/RevisedPicklist.jpg "Revised Pick List")

## Increase driver’s adherence to the system’s item prioritization

![Download Document Page](/images/GudangAda/DownloadDocumentPage.jpg "Download Document Page")

To prevent Drivers from relying solely on Surat Jalan documents for pickup, I’ve disabled the ability to download them before the reprioritization. This drives them to use the Driver App, at least until the item verification and reprioritization is done. If they need printed documents, we still provide them with a printable Pick List.

![Existing Design](/images/GudangAda/BeforePrintSJ.jpg "Existing Design")

Instead of printing beforehand, Drivers will now print the Surat Jalan directly within the pickup process. This allows the document to be generated with up-to-date information, reflecting the number of items picked up.

![Print Surat Jalan Step](/images/GudangAda/PrintSJStep.jpg "Print Surat Jalan Step")

I’ve also redesigned the Surat Jalan layout to include the actual number of items picked up, not just the initial order quantity, eliminating the need to strike though manually.

![Surat Jalan Document](/images/GudangAda/SJDocument.jpg "Surat Jalan Document")

###### Usability Testing

## Making sure the design is practical for the drivers and sellers

I pushed for usability testing. Unfortunately, due to organizational restructuring, I could not conduct these tests. However, the intended testing plan included:

### A concept test to identify user feedback on the Partial Pickup Improvement concept and to understand 1) its potential for resolving Partial Pickup issues and 2) its usability in improving the item preparation process.

| Participant                                                   | Criteria                                                  |
| ------------------------------------------------------------- | --------------------------------------------------------- |
| 1 TGA Seller (along with the Drivers assigned for each store) | have experienced data discrepancies due to Partial Pickup |
| 2 MP Seller (along with the Drivers assigned for each store)  | have experienced data discrepancies due to Partial Pickup |

::: highlight

###### <a id="result" style="position:relative;top:-120px"></a> Impact

## A more practical pickup process. Followed consistently by both drivers and sellers.

Although further testing was postponed, the solution aimed to streamline the pickup process, increase adherence to system prioritization, and thus reduce disputes by 50%.

:::

###### Personal Takeaways

## Designing for (truck) drivers with their unique workflow

Designing for GudangAda’s Drivers presents unique challenges because we often rely on assumptions shaped by our familiarity with local drivers, such as motorbike or taxi drivers. While both groups fall under the "driver" category, their tasks and work behaviors differ significantly.

When we shadowed GudangAda’s Drivers, the general assumptions about their workflow turned out to be incomplete and somewhat misleading. Our observations revealed distinct challenges they face daily: their work is physically demanding, often involving heavy lifting in various locations, which makes frequent phone use not only impractical but also risky for their devices. This insight explains their preference for using printed documents over the Driver App.

However, they must follow the system’s real-time updates, particularly during a Partial Pickup, where the app reprioritizes items. Bridging this online-to-offline behavior is the challenge we really hoped to solve. This project highlighted the importance of moving beyond assumptions to gain a deeper understanding of the user’s context, allowing us to better balance tech-driven solutions with real user needs.
