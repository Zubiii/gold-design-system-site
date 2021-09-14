---
layout: component/code-demo
iframe: examples/example-calendar
iframeFullwidth: true
code:
  - HTML: |
      <!--
        Light:  <section class="au-callout au-callout--calendar-event">
        Dark:   <section class="au-callout au-callout--calendar-event au-callout--dark">
      -->

      <section class="au-callout au-callout--calendar-event">
        <h2 class="au-callout__heading au-callout__heading--sronly">Description of the callout</h2>
        <p class="au-callout--calendar-event__lede">The next public holiday is:</p>
        <time class="au-callout--calendar-event__time" datetime="2017-01-01T00:00:00+00:00">Sunday 1 January</time>
        <span class="au-callout--calendar-event__name">New Year’s Day</span>
      </section>
  - React: |
      /*
        Light:  <AUcalloutCalendar>
        Dark:   <AUcalloutCalendar dark>
      */

      import { AUcalloutCalendar } from '@gold.au/callout';

      <AUcalloutCalendar
        title="Callout calendar"
        datetime="2017-01-01T00:00:00+00:00"
        time="Sunday 1 Jan"
        subline="The next public holiday is"
        name="New Year's Day"
      />
---
## Calendar

Use a calendar callout to notify and alert users of important dates and events.
