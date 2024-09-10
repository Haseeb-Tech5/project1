import { IconType } from "react-icons";

export interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
}
export interface SidebarItemProps {
  icon: IconType;
  title: string;
  active: boolean;
  to: string;
  dropdownOptions: string[];
  onClick: () => void;
}
export interface NavbarProps {
  isCollapsed: boolean;
}
export interface ModalProps {
  isOpen: boolean;
  title: string;
  placeholder: string;
  buttonText: string;
  onClose: () => void;
}
export interface TranslationModelProps {
  isOpen: boolean;
  onClose: () => void;
}
