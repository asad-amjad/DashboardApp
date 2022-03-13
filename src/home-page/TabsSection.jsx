import React from "react";
import { Tab, Tabs } from "@mui/material";
import SignInSecurityTab from "./SignInSecurityTab";

function TabPanel(props) {
  const { children, value, index } = props;
  return (
    <div style={{ textTransform: "capitalize" }}>
      {value === index && children}
    </div>
  );
}

const TabsLabel = [
  { id: 1, label: "Personal Information" },
  { id: 2, label: "Sign In & Security" },
  { id: 3, label: "Connect & View Social Media Information" },
  { id: 4, label: "Personalization" },
  { id: 5, label: "Centrain Points" },
];

const TabsContent = {
  1: <SignInSecurityTab />,
  2: "Sign In & Security Tab",
  3: "Connect & View Social Media Information Tab",
  4: "Personalization Tab",
  5: "Centrain Points Tab",
};

export default function TabsSection() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        sx={{ borderBottom: 1, borderColor: "divider" }}
      >
        {TabsLabel.map((t, index) => (
          <Tab
            key={index}
            label={t.label}
            style={{ textTransform: "capitalize" }}
          />
        ))}
      </Tabs>
      {TabsLabel
        ? TabsLabel.map((k, index) => (
            <TabPanel value={value} index={index} key={index}>
              {TabsContent[k.id]}
            </TabPanel>
          ))
        : "No Content"}
    </>
  );
}
