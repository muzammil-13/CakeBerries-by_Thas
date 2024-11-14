import React from 'react';
import Button from '../components/Button/Button';
import Card from '../components/Card/Card';

function Home() {
  return (
    <div>
      <h1>Welcome to Cakeberries!</h1>
      <Card title="Featured Cakes">
        {/* Content of the Card */}
        <Button>Order Now</Button>
      </Card>
    </div>
  );
}

export default Home;

