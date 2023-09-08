import {
  BottomNavigationAction,
  BottomNavigation as BottomNavigationMui,
  Paper,
} from "@mui/material";
import { ReactNode, useState } from "react";
import { ImageLayoutEnum } from "../../types/enum/ImageLayoutEnum";
import { getEnumValueFromIndex } from "../../utils/getEnumValueFromIndex";

type BottomNavigationActionType = {
  label: string;
  icon: ReactNode;
};
interface IBottomNavigation {
  actions: BottomNavigationActionType[];
  onBottomNavigationChange: (layout: ImageLayoutEnum) => void;
}

export function BottomNavigation({
  actions,
  onBottomNavigationChange,
}: IBottomNavigation) {
  const [value, setValue] = useState(0);
  return (
    <>
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          marginTop: "10px",
        }}
        elevation={3}
        data-testid="bottomNavBar"
      >
        <BottomNavigationMui
          showLabels
          value={value}
          onChange={(_event, newValue) => {
            setValue(newValue);
            const layoutName: ImageLayoutEnum = getEnumValueFromIndex(
              ImageLayoutEnum,
              newValue
            );
            layoutName && onBottomNavigationChange(layoutName);
          }}
          data-testid="bottomNavMui"
        >
          {actions.map(({ label, icon }) => {
            return (
              <BottomNavigationAction
                label={label}
                icon={icon}
                key={label}
                data-testid="bottomNavAction"
              />
            );
          })}
        </BottomNavigationMui>
      </Paper>
    </>
  );
}
