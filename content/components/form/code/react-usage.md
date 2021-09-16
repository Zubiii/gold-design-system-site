---
layout: section
---

## React Usage

```jsx
import { AUfieldset, AUlegend } from '@gold.au/form';
import { AUcheckbox } from '@gold.au/control-input';

<AUfieldset>
    <AUlegend>
        <h1 class="au-display-xxl">Which devices do you use?</h1>
        <span className="au-hint-text">You may select more than one</span>
    </AUlegend>
    <AUcheckbox label="Phone" name="checkbox-ex" id="cb-phone" block checked/>
    <AUcheckbox label="Tablet" name="checkbox-ex" id="cb-tablet" block/>
    <AUcheckbox label="Laptop" name="checkbox-ex" id="cb-laptop" block checked/>
</AUfieldset>
```
