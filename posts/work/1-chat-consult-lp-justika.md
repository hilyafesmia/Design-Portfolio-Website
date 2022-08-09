---
title: "Chat Consultation Landing Page"
metaTitle: "Chat Consultation Landing Page"
desc: "Based on Justika's website analytics, the Sending Problem Description step in the chatroom has the lowest conversion rate in the whole chat consultation process. To fix this, we decided to incorporate usability heuristic aspects in the chatroom."
metaDesc: "A data warehouse accessible for all stakeholders"
previewImg: "images/Justika/Cover.jpg"
company: "Justika"
role: "Product Designer"
scope: "Desktop Web, Mobile Web"
duration: "Jan 2022"
---

## Overview
Justika is a marketplace website that specifically provides consulting services and legal assistance.
We focused on the chat consultation process. The main goal of this project is to incorporate usability heuristic aspects in the chatroom to improve the overall chat consultation experience. In the end, the number of paying users **(NPU) increased by 39%** across all channels within five days of release.

### Users and Audience
First-time users, specifically with divorce or business-related problems.

### Roles and Responsibilities
Product Designer. My workflow includes creating a research plan, desk research, user interview, UI design and testing. This project also involves tight collaboration between the Product Manager, Front-end Engineers, Operational Staff, and me.

## Problem Statement
Justika’s chat consultation is the most used consultation method as it is the most affordable of all the consultations provided. 

> However, based on previous usage data, the Sending Problem Description step in the chatroom has the lowest conversion rate in the whole chat consultation process. 

We assumed that the lack of usability heuristic aspects in Justika's chatroom, such as Match Between System and Real World, Aesthetic and Minimal Design, and Help and Documentation, caused users to drop off. 

From that assumption, we tried to fix this by finding what we can do to meet those three usability heuristic aspects so that users can start chat consultation without hiccups.

## Research

### Contextual Inquiries 

#### Evaluating Usability Heuristic Aspects
As the assumption started from the lack of usability heuristic aspects, we need to re-evaluate the current design with those aspects in mind. 

**Key Finding(s)**

- **Match Between System and Real World** 
    At Justika, users start their consultation by sending their problem description. Then, they will be prompted to pay the consultation fee. After the payment is verified, the system will connect them with lawyers with relevant specialization based on their problem description. However, that is not usually the case in offline consultation. People need to make an appointment and pay upfront before they can tell lawyers their problem. This means our current flow doesn't match with what people usually do in the real world.
- **Aesthetic and Minimal Design** 
    When entering the chatroom, users are shown too much information; starting from greetings, the number of clients, consultation guides, and consultation price. The black chat bubble, intended to differentiate between the system chat bubble and the lawyer-written bubble, also has poor readability. Both problems make it difficult for users to read and focus on the essential information. This falls into the Aesthetic and Minimal Design criteria.
- **Help and Documentation** 
    When users have questions about Justika, its consulting methods, or services, there is no place where they can easily seek answers or ask someone. It will leave them confused because they don't know where to get the information they need.

#### **Have a chat with the Operational Team**
We wanted to know users' frequently asked questions regarding chat consultation to learn about things users don't understand and/or want to know more about regarding chat consultation.

**Key Finding(s)**

- Users don't know that Justika provides consultation services other than chat consultation
- Users don't understand how to order a chat consultation
- Users want to make sure that Justika's lawyer can handle their problem before deciding to order a chat consultation

#### **Have a chat with the Head of the Marketing Team**
We wanted to know the difference in Sending Problem Description step conversion rate between all channels.

**Key Finding(s)**

The Sending Problem Description step conversion rate is better on the dedicated-problem landing page (such as the divorce landing page) than on Justika's main landing page. We assumed that the presence of social proofs, such as lawyer profiles and case specialization, make users more likely to send their problem descriptions.

#### **Desk research from previously conducted research**

**Key Finding(s)**

Users who have a divorce or business-related problem tend to skim information because they either have no time or are too clouded to read carefully.

### Research Questions
> How does the **level of first-time users understanding of Justika** affect the ***consultation flow*** and ***information needs*** in using the chat consultation service according to their needs?

## Design

### Mapping FAQ

![FAQ](/images/Justika/FAQ.jpg "FAQ")

We chose which questions would be put in the chatroom based on the insights from the Operational Team. We also consider adding social proof aspect to the FAQ thanks to the Marketing Team insight. All the copywritings were done by me.

### Deciding which kind of UI is the most optimal to present the FAQ

![Design Alternatives](/images/Justika/DesignAlternatives.jpg "Design Alternatives")

Initially, we made two UI alternatives: additional page before the chatroom and a chat-bot-like interaction in the chatroom. We decided to use the chat-bot-like UI as it is more flexible–first-time users can choose what they want to know more while returning users can easily use the chatroom as they always do–and more concise.

### Implement Usability Heuristic Aspects

![Design System Chat](/images/Justika/DesignSystemChat.jpg "Design System Chat")

- We tried to change the order flow following a real-world case scenario in making a legal consultation appointment as follows: pay-verified-put description-connect to a lawyer. 
- In order to comply with WCAG's color contrast, we made the chatroom background darker by one point. 
- We disposed of the black chat bubble and use the white chat bubble instead. To differentiate between system chat and lawyer chat, we put a line that says `You are connected with a consultant` at the start of the consultation period and `The consultation session has ended` after the consultation ends


## Testing
To confirm the hypotheses, we conducted task-based A/B usability testing with three persons who don't know Justika.

![Task-based Usability Testing](/images/Justika/Task-basedUsabilityTesting.jpg "Task-based Usability Testing")

Two respondents were shown the existing design first, then the proposed design. The last one was shown the proposed design first, then the existing design. The goal was to figure out first-time users' usage patterns and how their understanding of Justika affects their desire to start a consultation

![Card Sort](/images/Justika/CardSort.jpg "Card Sort")

After that we did an open card sort to figure out how respondents group items and understand the level of importance of each piece of information provided.

### Key Findings
- Respondents who know about Justika's various services will be more likely to order Justika's chat consultation service than those who think that Justika only has a chat consultation service. By knowing that Justika has a lot to offer, they know they can solve their problem to the very end, not just until the chat consultation ends.
- Respondents feel the information displayed as a chat bubble is more concise than a paragraph–even when both have the same word length–because they only want to see what they want to know.
- The absence of case category information affects respondents' decision to try chat consultation as they want to ensure their problem is solvable before paying the consultation fee.
- Respondents feel no difference between the two flows (pay upfront vs existing) because both flows connect them with the lawyer at the end of the process. They don't really care whether they write their problem description upfront or after payment.


## Result
### The number of paying users (NPU) increased by 39% across all channels within five days of release.



