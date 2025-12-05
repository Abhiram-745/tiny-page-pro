import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Upload, X, Camera } from "lucide-react";
import { toast } from "sonner";

interface SimplePhotoUploadProps {
  onPhotoCapture: (dataUrl: string) => void;
  currentPhotoUrl?: string;
}

export const SimplePhotoUpload = ({ onPhotoCapture, currentPhotoUrl }: SimplePhotoUploadProps) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(currentPhotoUrl || null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        toast.error("File too large. Maximum size is 10MB.");
        return;
      }
      
      const reader = new FileReader();
      reader.onloadend = () => {
        const dataUrl = reader.result as string;
        setPreviewUrl(dataUrl);
        onPhotoCapture(dataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClear = () => {
    setPreviewUrl(null);
    onPhotoCapture("");
  };

  return (
    <div className="space-y-4">
      {!previewUrl ? (
        <div className="space-y-4">
          <Button
            variant="outline"
            className="w-full h-16 flex items-center justify-center gap-3"
            onClick={() => cameraInputRef.current?.click()}
          >
            <Camera className="h-6 w-6" />
            <span className="text-base">Take Photo</span>
          </Button>
          <input
            ref={cameraInputRef}
            type="file"
            accept="image/*"
            capture="environment"
            onChange={handleFileSelect}
            className="hidden"
          />

          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <span className="relative bg-background px-3 text-sm text-muted-foreground">or</span>
          </div>

          <label
            tabIndex={0}
            role="button"
            onClick={() => fileInputRef.current?.click()}
            className="flex flex-col items-center justify-center p-6 cursor-pointer hover:bg-muted/50 rounded-lg transition-colors border border-dashed"
          >
            <Upload className="h-10 w-10 text-muted-foreground mb-3" />
            <p className="text-sm text-muted-foreground mb-1">Click to upload or drag and drop</p>
            <p className="text-xs text-muted-foreground">PNG, JPG up to 10MB</p>
          </label>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
          />
        </div>
      ) : (
        <div className="relative">
          <img
            src={previewUrl}
            alt="Preview"
            className="w-full h-auto rounded-lg max-h-96 object-contain"
          />
          <Button
            variant="destructive"
            size="icon"
            className="absolute top-2 right-2"
            onClick={handleClear}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
};
