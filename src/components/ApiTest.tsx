'use client';

import React, { useState } from 'react';

export default function ApiTest() {
  const [testResult, setTestResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  
  const testApi = async () => {
    setLoading(true);
    setTestResult(null);
    
    try {
      console.log('Testing API...');
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Test User',
          email: 'test@example.com',
          message: 'This is a test message',
        }),
      });
      
      console.log('Response status:', res.status);
      const data = await res.json();
      console.log('Response data:', data);
      
      setTestResult(JSON.stringify(data, null, 2));
    } catch (err: any) {
      console.error('API test error:', err);
      setTestResult(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="p-6 bg-neutral-900/80 border border-neutral-800 rounded-xl shadow-sm mt-8">
      <h3 className="text-xl font-bold mb-4">API Test</h3>
      <button
        onClick={testApi}
        disabled={loading}
        className="bg-neutral-600 text-white px-4 py-2 rounded mb-4"
      >
        {loading ? 'Testing...' : 'Test Contact API'}
      </button>
      
      {testResult && (
        <div className="mt-4">
          <h4 className="font-bold mb-2">Test Result:</h4>
          <pre className="bg-neutral-950 p-4 rounded overflow-auto max-h-60">
            {testResult}
          </pre>
        </div>
      )}
    </div>
  );
}
