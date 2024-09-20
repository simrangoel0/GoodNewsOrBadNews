'use client'

import { ThumbsDown, ThumbsUp, Upload } from 'lucide-react';
import { useState } from 'react';
import { Button, Card, CardContent, CardHeader } from '../../components/ui';

const Page = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [analysis, setAnalysis] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type === 'text/plain') {
      setFile(selectedFile);
      setFileName(selectedFile.name);
    } else {
      alert('Please upload a valid .txt file');
    }
  };

  const handleAnalyze = async () => {
    if (!file) {
      alert('Please upload a file before analyzing');
      return;
    }

    // TODO: Implement file reading and API call to IBM WatsonX AI
    // For now, we'll use mock data
    setAnalysis({
      positives: ['Great customer service', 'High quality product'],
      concerns: ['Slow delivery', 'Packaging could be improved']
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-600">Business Review Analyzer</h1>
      
      <Card className="max-w-2xl mx-auto mb-8">
        <CardHeader>
          <h2 className="text-xl font-semibold">Upload Reviews File</h2>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center w-full">
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Upload className="w-10 h-10 mb-3 text-gray-400" />
                <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                <p className="text-xs text-gray-500">TXT file only</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" accept=".txt" onChange={handleFileChange} />
            </label>
          </div>
          {fileName && <p className="mt-2 text-sm text-gray-500">Selected file: {fileName}</p>}
          <Button onClick={handleAnalyze} className="mt-4" disabled={!file}>Analyze Reviews</Button>
        </CardContent>
      </Card>

      {analysis && (
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <h2 className="text-xl font-semibold">Analysis Results</h2>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <h3 className="text-lg font-medium flex items-center mb-2">
                <ThumbsUp className="mr-2 text-green-500" />
                Positives
              </h3>
              <ul className="list-disc pl-6">
                {analysis.positives.map((item, index) => (
                  <li key={index} className="text-green-700">{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium flex items-center mb-2">
                <ThumbsDown className="mr-2 text-red-500" />
                Concerns
              </h3>
              <ul className="list-disc pl-6">
                {analysis.concerns.map((item, index) => (
                  <li key={index} className="text-red-700">{item}</li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Page;