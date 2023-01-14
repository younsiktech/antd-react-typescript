import React from 'react';
import { Button } from 'antd';

export default function Buttons() {
  return (
    <div className="row">
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type="dashed">Dashed</Button>
      <Button disabled>Disabled</Button>
      <Button type="ghost">Ghost</Button>
      <Button type="link">Link</Button>
    </div>
  );
}
