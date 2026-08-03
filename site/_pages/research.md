---
title: "Research"
layout: default
excerpt: "Sabre Kais Group — Research"
sitemap: false
permalink: /research/
---

# Research

Our work spans quantum information science, quantum computing for chemistry, and
quantum machine learning. Selected themes:

<div class="research-grid" markdown="0">
{% assign topics = site.research | sort: 'order' %}
{% for topic in topics %}
<div class="research-card">
    <a href="{{ topic.url | relative_url }}" class="research-card-image">
        {% if topic.image %}
        <img src="{{ topic.image | relative_url }}" alt="{{ topic.title }}">
        {% else %}
        <i class="{{ topic.icon | default: 'fas fa-atom' }}" aria-hidden="true"></i>
        {% endif %}
    </a>
    <div class="research-card-body">
        <h3 class="research-card-title"><a href="{{ topic.url | relative_url }}">{{ topic.title }}</a></h3>
        <p class="research-card-summary">{{ topic.summary }}</p>
    </div>
</div>
{% endfor %}
</div>

### Related centers

- [Center for Quantum Technologies (CQT)](https://www.purdue.edu/cqt/)
- [NSF CCI — Modular Quantum Devices](https://ursula.chem.yale.edu/~batista/NSF_CenterQuantumDynamics_ModularQuantumDevices/team/team_members.html)
