import { UploadFileSection, UploadSection } from "./UploadFileStyles";
import UploadFileIcon from "@mui/icons-material/UploadFile";
const UploadFile = ({ setFile }: { setFile: (e: File) => void }) => {
  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();

    const currentFile = e.dataTransfer.files[0];
    if (currentFile) {
      setFile(currentFile);
    }
  };

  const handleSetFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.currentTarget.files && e.currentTarget.files.length > 0) {
      const currentFile = e.currentTarget.files[0];
      setFile(currentFile);
    }
  };

  return (
    <UploadFileSection>
      <input
        name="file"
        id="fichero"
        type="file"
        accept="image/png,  image/jpeg"
        style={{ display: "none" }}
        onChange={handleSetFile}
      />

      <UploadSection
        htmlFor="fichero"
        className="upload-section"
        onDragOver={(e) => e.preventDefault()}
        onDragLeave={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        <label>Drag and drop</label>
        <UploadFileIcon />
      </UploadSection>
    </UploadFileSection>
  );
};

export default UploadFile;
