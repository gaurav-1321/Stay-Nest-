import { useState } from 'react';

const Imageuploader = ({setimages}) => {

  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleChange = (e) => {
    const file=e.target.files[0] || "/Animate.jpg";
    
    if (file) {
    const imageurl=URL.createObjectURL(file);
    setimages(imageurl)
      const filesArray = Array.from(e.target.files).map((file) => ({
        id: crypto.randomUUID(),
        file,
        url: URL.createObjectURL(file)
      }));
      setimages(file || "./Animate.jpg");
      setSelectedFiles((prevImages) => prevImages.concat(filesArray));
    }

  };
  const removeImage = (id, url) => {
    setSelectedFiles(selectedFiles.filter((img) => img.id !== id));
    URL.revokeObjectURL(url); 
  };

  return (
    <div className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
      <label className="cursor-pointer">
       
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleChange}
          className="block w-full text-sm text-slate-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-white file:text-purple-600
            hover:file:bg-gray-200 cursor-pointer"
            
        />
      </label>

      <div className="flex flex-wrap gap-4 mt-6">
        {selectedFiles.map((image) => (
          <div 
            key={image.id}
            className="relative group shadow-sm rounded-lg overflow-hidden border border-slate-200"
          >
            <img 
              src={image.url} 
              alt="preview" 
              className="w-24 h-24 md:w-32 md:h-32 object-cover transition-transform duration-200 group-hover:scale-105"
            />
            
            <button 
              type="button"
              onClick={() => removeImage(image.id, image.url)}
            
              className="absolute top-1 right-1 bg-red-500 text-white w-6 h-6 rounded-full 
              flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 
 transition-opacity duration-200 shadow-md hover:bg-red-600 z-10"
              
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Imageuploader;
