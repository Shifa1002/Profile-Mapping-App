// reportWebVitals.js

// Import the web-vitals library
import { onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals';

// Define the reportWebVitals function
const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    onCLS(onPerfEntry);
    onFID(onPerfEntry);
    onFCP(onPerfEntry);
    onLCP(onPerfEntry);
    onTTFB(onPerfEntry);
  }
};

// Export the reportWebVitals function as the default export
export default reportWebVitals;
