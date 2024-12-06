import React from 'react';
import Button from './Button/Button';

const TestButtons: React.FC = () => {
  return (
    <div className="flex flex-col space-y-4 p-4">
      <Button variant="primary" label="Primary Button" onClick={() => alert('Primary clicked!')} />
      <Button variant="secondary" label="Secondary Button" />
      <Button variant="success" label="Success Button" />
      <Button variant="danger" label="Danger Button" />
      <Button variant="outline" label="Outline Button" />
    </div>
  );
};

export default TestButtons;
