"use client"
import React, { useCallback } from 'react';
import { useDropzone, DropzoneRootProps, DropzoneInputProps } from 'react-dropzone';

interface DropzoneProps {
  className?: string;
}

const Dropzone: React.FC<DropzoneProps> = ({ className }) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files
  }, []);

  const { getRootProps, getInputProps, isDragActive }: {
    getRootProps: (props?: DropzoneRootProps) => DropzoneRootProps,
    getInputProps: (props?: DropzoneInputProps) => DropzoneInputProps,
    isDragActive: boolean
  } = useDropzone({ onDrop });

  return (
    <div {...getRootProps({ className })}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
  );
};

export default Dropzone;
