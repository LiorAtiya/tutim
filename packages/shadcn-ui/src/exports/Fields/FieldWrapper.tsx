import React from 'react';

import { Info } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../../components/ui/tooltip';

interface LabelProps {
  label?: string;
  tooltip?: string;
}

export const Label: React.FC<LabelProps> = ({ label, tooltip }) => {
  return (
    <div className="text-gray-600">
      {label}
      {tooltip && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" className="w-4 h-4 p-0 ml-1 rounded-full">
                <Info className="w-4 h-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>{tooltip || ''}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </div>
  );
};

export const FieldWrapper: React.FC<{ fieldConfig: any; fieldState: any; children: any }> = ({
  fieldConfig,
  fieldState,
  children,
}) => {
  const { key, label, tooltip, helperText, isRequired } = fieldConfig;
  const { error = { message: '' } } = fieldState || {};
  const showError = !!error.message;

  return (
    <div key={key} className='w-full mt-3'>
      <div className={`flex`}>
        <Label label={label} tooltip={tooltip} />
        {isRequired ? '*' : null}
      </div>
      {children}
      {showError ? (
        <div className="text-sm text-red-500">{error.message}</div>
      ) : (
        <div className="text-sm text-gray-400">{helperText}</div>
      )}
    </div>
  );
};
