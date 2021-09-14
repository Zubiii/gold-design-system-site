---
layout: component/code-demo
iframe: examples/example-default
iframeFullwidth: true
code:
  - HTML: |
      <!--
        Light:  <section class="au-callout">
        Dark:   <section class="au-callout au-callout--dark">
      -->
      <section class="au-callout">
          <h2 class="au-callout__heading">Title of the callout</h2>
          <p>Description of the callout</p>
      </section>

  - React: |
      /*
        Light:  <AUcalloutCalendar>
        Dark:   <AUcalloutCalendar dark>
      */

      import { AUcallout } from '@gold.au/callout';

      <AUcallout title="Title of the callout">
        <p>Description of the callout</p>
      </AUcallout>
---
## Default

Use callout to notify and alert users of important snippets of information.
