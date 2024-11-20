import { useState } from "react";

const MessageInput: React.FC<{
  onSubmit: (message: string) => void;
  disabled?: boolean;
}> = ({ onSubmit, disabled = false }) => {
  const [input, setInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ input });

    if (input.trim().length > 0 && input !== "") onSubmit(input);
    setInput("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-between gap-4"
    >
      <input
        type="text"
        value={input}
        onChange={handleChange}
        disabled={disabled}
        placeholder={
          disabled ? "This input has been disabled." : "Your message here"
        }
        className="form-input"
      />
      <button className="btn primary">Send</button>
    </form>
  );
};

export default MessageInput;
