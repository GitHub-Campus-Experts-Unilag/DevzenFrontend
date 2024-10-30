import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';

interface OpenInBrowserBtnProps {
  htmlContent: string;
}

const OpenInBrowserBtn: React.FC<OpenInBrowserBtnProps> = ({ htmlContent }) => {
  const openInBrowser = () => {
    const blob = new Blob([htmlContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    window.open(url, "_blank");
  };

  return (
    <button
      className="bg-[#303030] text-xs py-1 px-2 rounded flex items-center self-center gap-1"
      onClick={openInBrowser}
    >
      Open in browser <OpenInBrowserIcon />
    </button>
  );
};

export default OpenInBrowserBtn;
