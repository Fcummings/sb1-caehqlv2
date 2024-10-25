import { Zap } from "lucide-react"

export default function Logo({ className = "", onClick }: { className?: string, onClick?: () => void }) {
  return (
    <div 
      className={`inline-flex items-center gap-2 ${className}`}
      onClick={onClick}
    >
      <Zap 
        className="w-12 h-12 text-blue-500 transform transition-transform group-hover:scale-110" 
        strokeWidth={2}
      />
      <span className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        CLKK
      </span>
    </div>
  )
}
</boltArtifact>

<boltAction type="file" filePath="src/utils/saveIcon.ts">
import html2canvas from 'html2canvas'
import { toast } from "@/components/ui/use-toast"

export async function saveIconAsPNG() {
  const logoElement = document.getElementById('clkk-logo')
  if (!logoElement) {
    toast({
      variant: "destructive",
      title: "Error",
      description: "Could not find logo element to save"
    })
    return
  }

  try {
    const canvas = await html2canvas(logoElement, {
      backgroundColor: null,
      scale: 4, // Higher resolution
      logging: false,
      useCORS: true,
      allowTaint: true
    })

    const link = document.createElement('a')
    link.download = 'clkk-logo.png'
    link.href = canvas.toDataURL('image/png')
    link.click()

    toast({
      title: "Success",
      description: "Logo has been downloaded successfully"
    })
  } catch (error) {
    toast({
      variant: "destructive",
      title: "Error",
      description: "Failed to save logo"
    })
    console.error('Error saving logo:', error)
  }
}