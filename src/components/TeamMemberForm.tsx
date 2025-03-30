
import React,{useState} from "react";
import { UseFormRegister, FieldErrors, Control, Controller } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FormData } from "./TeamMembersSection";

interface TeamMemberFormProps {
  index: number;
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  control: Control<FormData>;
  isLeader: boolean;
   onSetLeader: (index: number) => void;
  // onRemove: (index: number) => void;
  // showRemoveButton: boolean;
  customStyles?: {
    glassCard: string;
    inputField: string;
  };
}

const TeamMemberForm: React.FC<TeamMemberFormProps> = ({
  index,
  register,
  errors,
  control,
  isLeader,
  onSetLeader,
  customStyles,
}) => {
  // Define local styles instead of relying on global CSS
  const localStyles = {
    card: customStyles?.glassCard || `
      bg-[#1A1A1A]/80 backdrop-blur-lg border border-[#333333]/60 rounded-lg
      p-6 mb-6 animate-[slideUp_0.3s_ease-out_forwards]
    `,
    input: customStyles?.inputField || `
      bg-[#1E1E1E] border border-[#333333] rounded-md px-4 py-2 
      text-white placeholder-gray-400 focus:outline-none focus:ring-2 
      focus:ring-[#FF0000]/50 focus:border-[#FF0000] transition-all
      duration-300 w-full
    `,
    errorText: `
      text-[#FF0000] text-sm mt-1
    `,
    title: `
      text-lg font-medium text-white
    `,
    removeButton: `
      text-rose-500 hover:text-opacity-80 transition-colors
    `
  };
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const HandleuploadID = () => {
    const input = document.createElement("input");
    input.type='file'
    input.accept="image/*"
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        // Handle the file upload here

        setUploadedFileName(file.name); // Update the idCard field in the members array
        console.log("File selected:", file.name);
      }
    };
    input.click();

  }
  
  // Animation delay style
  const animationDelayStyle = { animationDelay: `${index * 0.1}s` };

  return (
    <div className={localStyles.card} style={animationDelayStyle}>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <Controller
            name={`members.${index}.isLeader`}
            control={control}
            render={({ field }) => (
              <RadioGroup value={isLeader ? "leader" : ""} onValueChange={() => onSetLeader(index)}>
                <RadioGroupItem 
                  value="leader"
                  className="h-4 w-4 border-[#FF0000] text-[#FF0000]"
                />
              </RadioGroup>
            )}
          />
          <h3 className={localStyles.title}>
            {isLeader ? "Team Leader" : `Team Member ${index + 1}`}
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <input
            {...register(`members.${index}.fullName`, {
              required: "Full name is required",
            })}
            placeholder="Full Name *"
            className={localStyles.input}
          />
          {errors.members?.[index]?.fullName && (
            <p className={localStyles.errorText}>
              {errors.members[index].fullName.message}
            </p>
          )}
        </div>
        <div className="relative ">
          <input
            {...register(`members.${index}.college`, {
              required: "College name is required",
            })}
            placeholder="College Name *"
            className={localStyles.input}
          />
          {errors.members?.[index]?.college && (
            <p className={localStyles.errorText}>
              {errors.members[index].college.message}
            </p>
          )}
        </div>
        <div className="relative">
          <input
            {...register(`members.${index}.rollNumber`, {
              required: "Roll number is required",
            })}
            placeholder="Roll Number *"
            className={localStyles.input}
          />
          {errors.members?.[index]?.rollNumber && (
            <p className={localStyles.errorText}>
              {errors.members[index].rollNumber.message}
            </p>
          )}
        </div>
      
        <div className="relative">
          <input
            placeholder={uploadedFileName||"Upload your IDCard*"}
            onClick={HandleuploadID}
            className={localStyles.input}/>
        </div>

         
        <div className="relative">
          <input
            {...register(`members.${index}.phone`, {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Please enter a valid 10-digit phone number",
              },
            })}
            placeholder="Phone Number *"
            className={localStyles.input}
          />
          {errors.members?.[index]?.phone && (
            <p className={localStyles.errorText}>
              {errors.members[index].phone.message}
            </p>
          )}
        </div>

        <div className="relative">
          <input
            {...register(`members.${index}.email`, {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter a valid email address",
              },
            })}
            placeholder="Email *"
            className={localStyles.input}
          />
          {errors.members?.[index]?.email && (
            <p className={localStyles.errorText}>
              {errors.members[index].email.message}
            </p>
          )}
        </div>
        <div className="relative">
          <input
            {...register(`members.${index}.idCard`, {
              required: "idCard is required",
            })}
            type="file"
            accepted="image/*"
            placeholder="Upload idCard*"
            className="idCard hidden"
          />
          {errors.members?.[index]?.fullName && (
            <p className={localStyles.errorText}>
              {errors.members[index].fullName.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberForm;
