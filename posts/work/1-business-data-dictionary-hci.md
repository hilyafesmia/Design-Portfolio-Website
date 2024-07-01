---
title: "Business Data Dictionary"
metaTitle: "Business Data Dictionary"
desc: "Data warehouse is a large collection of data derived from operational database managed by data engineers. It’s hard for data analyst to retrieve and update the data, hence resulting in slow analysis progress. From that problem, we decided to make a business data dictionary--data warehouse that is accessible for all stakeholders."
metaDesc: "A data warehouse accessible for all stakeholders"
previewImg: "images/HCI/Cover.jpg"
company: "HomeCredit Indonesia"
role: "Product Designer, Front-end Developer"
scope: "Desktop Web"
duration: "Feb–Mar 2019"
---

## <a id="overview" style="position:relative;top:-200px"></a> Overview

HomeCredit Indonesia is a company that provides financing services for customers who shop online and offline.
In this project, we focused on ​​data retrieval and updates of the existing internal data warehouse. The main goal is to create a centralized data dictionary accessible to all stakeholders.

### Users & Audience

Business Intelligence, Data Analyst, and Data Engineer.

### Roles and Responsibilities

Product Designer and Front-end Web Developer. We are working in a group of 6: 3 other engineers, 1 PM and me. My workflow includes creating a research plan, user interview, UI design, testing, and UI development using React Redux.

## Problem Statement

A data warehouse is an extensive collection of data from an operational database to help organizations analyze data and make decisions. It’s designed for query and analysis purposes. It is the best way to keep data accessible from your fingertip, but it’s not the best setting for mutability and collaborative work because;

1. Only data engineers have the power to make all the changes in the data warehouse and,
2. Every department has its data warehouse. This thick layer gives the analyst a hard time retrieving and updating the data, resulting in slow analysis progress.

After looking into the problem, a question came up to mind:

> Why don't we make a centralized data warehouse accessible for all stakeholders and not just data engineers?

Instead of asking each other every time changes are made and spending their time on meetings that shouldn't even exist in the first place, analysts can just do all the discussions and data management in one app––SLOVNEEK.

## <a id="process" style="position:relative;top:-200px"></a> Process Summary

![Flow](/images/HCI/Flow.jpg "Flow")

## Research

### Contextual Inquiries

#### A Day In The Life

We visited the HQ and stayed for a day to get a better look at our users and the atmosphere our users would be doing their job. We followed two persons, one from BI and one from Data Analyst.

**Key Finding(s)**

- Respondents are working 9 to 5, and they only work during office hours
- Respondents work from office and they use the computera at work
- Respondents have meetings daily

#### User Interview

We then tried to get further to understand our users better by interviewing them.

**Key Finding(s)**

- A meeting is needed to make changes to a data definition. It consists of the person who requested a change, a data engineer, and a department representative whose data definition is to be changed. It can last for hours and doesn’t always result in a solution; sometimes, a second meeting is expected.
- Analysts don’t rely on the data warehouse because it’s not regularly updated due to the limitations above

## Design

### Branding

**Color Palette**

![ColorPalette](/images/HCI/ColorPalette.jpg "ColorPalette")

Our client’s primary color is red. Hence, a red color palette is a must for SLOVNEEK. Additionally, I used turquoise as our secondary color and dark grey for the text. I chose white as our background color to give a clean and calm look.

**Typography**

![Typography](/images/HCI/Typography.jpg "Typography")

SF Pro Display is a free, open-source Apple font. I chose this font family because it’s one of the fonts that have good readability. I also used the golden rule for customizing the line height and spacing between letters.

**UI Kit**

![UIKit](/images/HCI/UIKit.jpg "UIKit")

Above is SLOVNEEK's UI Kit. It is based on but is not limited to Google's Material Design, Apple’s Human Interface Guideline, and our design principles.

### Information Structure

![IA](/images/HCI/IA.jpg "IA")

I organized the PBI received and drew a site map showing user flow.

### User Flow

![FlowUser](/images/HCI/FlowUser.jpg "FlowUser")

I used the user flow to help structure the screens I needed to sketch our prototype. In this case, Helmy’s goal is to create a data definition “Account Payable.”

### Wireframe

![Wireframe](/images/HCI/Wireframe.jpg "Wireframe")

After the information structure was approved, I created a wireframe of the site to
show the general layouts.

## Testing

![Interview Photos](/images/HCI/InterviewPhotos.jpg "Interview Photos")

I used task-based usability testing and highlighted relevant issues about its usability and functionalities.

### Key Findings

- Users don’t know what ‘Requests’ under Content Management is.
- Users feel that the statistic dashboard is not needed. They prefer News as their first page.

## <a id="result" style="position:relative;top:-200px"></a> Result

After multiple iterations and exploring the visual design elements, I produced some screens and turned them into an actual usable website.

### News Module

![News](/images/HCI/News.jpg "News")

The news page shows a list of patch updates. The primary purpose of this page is to inform users on updates regarding data definition.

### Data Definition Detail Page

![DataDetail](/images/HCI/DataDetail.jpg "DataDetail")

This is a data definition detail page. This page can be accessed through the search bar by everyone, and additionally through the data definition page if you're a BI. It contains all the necessary information for all stakeholders. Other than for viewing, it has two other features: `request change` and `comment`.

Insted of having physical meeting(s), all stakeholders can just `comment` on the desired data definition if they have any questions or requests. After an agreement is met, the person who wants to change some aspects about the data definition can use the `request change` feature to submit the request formally.

### Content Management: Data Definition

![DataDefinition](/images/HCI/DataDefinition.jpg "DataDefinition")

The data definition page shows a list of data definitions. The primary purpose of this page is to create a data definition. Besides data definition creation, a BI can also edit and delete data definitions.

### Content Management: Change Request

![ChangeRequest](/images/HCI/ChangeRequest.jpg "ChangeRequest")

The change requests page shows a list of data definition change requests made by stakeholders. When someone clicked Request Change button on the data detail page, the request will show up here. The primary purpose of this page is for BI to accept or decline a request.

### User Management

![UserManagement](/images/HCI/UserManagement.jpg "UserManagement")

The user management page shows a list of users. The primary purpose of this page is to view users. Besides viewing, a BI can also edit and delete users' roles.
