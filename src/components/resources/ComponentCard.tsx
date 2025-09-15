"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Copy, Check } from 'lucide-react';

interface ComponentCardProps {
  title: string;
  description: string;
  category: string;
  usage: string;
  props?: string[];
  example?: string;
}

const ComponentCard = ({ 
  title, 
  description, 
  category, 
  usage, 
  props, 
  example 
}: ComponentCardProps) => {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg">{title}</CardTitle>
            <CardDescription className="mt-1">{description}</CardDescription>
          </div>
          <Badge variant="secondary">{category}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold text-sm text-muted-foreground mb-2">Utilisation</h4>
          <p className="text-sm">{usage}</p>
        </div>
        
        {props && props.length > 0 && (
          <div>
            <h4 className="font-semibold text-sm text-muted-foreground mb-2">Props principales</h4>
            <div className="flex flex-wrap gap-2">
              {props.map((prop, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {prop}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {example && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-sm text-muted-foreground">Exemple d&apos;import</h4>
              <Button
                variant="ghost"
                size="default"
                onClick={() => copyToClipboard(example)}
                className="h-6 px-2"
              >
                {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
              </Button>
            </div>
            <div className="bg-muted p-3 rounded-md">
              <code className="text-xs text-muted-foreground">{example}</code>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ComponentCard;
