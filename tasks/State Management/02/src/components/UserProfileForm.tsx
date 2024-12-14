import { useState } from "react";

export type UserProfile = {
  displayName: string;
  email: string;
  phone: string;
  emailNotifications: boolean;
  smsNotifications: boolean;
};

interface ProfileFormProps {
  onSubmit: (profile: UserProfile) => Promise<void>;
  initialData: UserProfile;
}

export function UserProfileForm({ onSubmit, initialData }: ProfileFormProps) {
  const [data, setData] = useState<UserProfile>(initialData);

  const handleChange = (type: string) => (e: any) =>
    setData((prev) => ({
      ...prev,
      [type]: e.target.value,
    }));

  const handleReset = () => {
    setData({ displayName: "", email: "", phone: "", emailNotifications: false, smsNotifications: false });
  };

  const handleChangeCheckbox = (type: string) => (e: any) => {
    setData(prev => ({
      ...prev,
      [type]: e.target.checked
    }))
  }

  return (
    <div className="profile-form">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(data);
        }}
      >
        <div className="form-section">
          <h3>Contact Information</h3>
          <label htmlFor="displayName">Display Name:</label>
          <input type="text" name="displayName" id="displayName" value={data?.displayName} onChange={handleChange("displayName")} />
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" value={data?.email} onChange={handleChange("email")} />
          <label htmlFor="phone">Phone:</label>
          <input type="phone" name="phone" id="phone" value={data?.phone} onChange={handleChange("phone")} />
        </div>

        <div className="form-section">
          <h3>Notification Preferences</h3>
          <label htmlFor="emailNotifications">emailNotifications</label>
          <input type="checkbox" name="emailNotifications" id="emailNotifications" checked={data?.emailNotifications} onChange={handleChangeCheckbox('emailNotifications')} />

          <label htmlFor="smsNotifications">smsNotifications</label>
          <input type="checkbox" name="smsNotifications" id="smsNotifications" checked={data?.smsNotifications} onChange={handleChangeCheckbox('smsNotifications')}/>
        </div>

        <div className="form-preview">
          <h3>Preview</h3>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>

        <div className="form-actions">
          <button type="submit" name="submit" disabled={!data?.displayName || !data?.email || !data?.phone}>
            Submit
          </button>
          <button type="reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
