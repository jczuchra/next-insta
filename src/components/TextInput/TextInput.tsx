const TextInput = ({ value, placeholder, type = '', onChange }) => {
  return (
    <input
      className='w-[75%] h-10 bg-[#fafafa] mb-2 border border-gray2 rounded-sm text-xs pl-2'
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};

export default TextInput;
