'use client';

import React, { useState } from 'react';

export default function ApiTestPage() {
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
      <div className="w-full max-w-md p-6 bg-neutral-900/80 border border-neutral-800 rounded-xl shadow-sm">
        <h1 className="text-2xl font-bold mb-6">Contact API Test</h1>
        
        <button
          onClick={testApi}
          disabled={loading}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded mb-6"
        >
          {loading ? 'Testing...' : 'Test Contact API'}
        </button>
        
        {testResult && (
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-2">Test Result:</h2>
            <pre className="bg-neutral-950 p-4 rounded overflow-auto max-h-60 text-sm">
              {testResult}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
