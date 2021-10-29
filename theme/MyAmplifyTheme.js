import { AmplifyTheme } from "aws-amplify-react-native";

const GREEN = "#008800";
const DISABLED_GREEN = "#00880080";

const ButtonColor = Object.assign({}, AmplifyTheme.button, {
  backgroundColor: GREEN,
});
const DisabledButtonColor = Object.assign({}, AmplifyTheme.buttonDisabled, {
  backgroundColor: DISABLED_GREEN,
});
const Disabled = Object.assign({}, AmplifyTheme, {
  backgroundColor: DISABLED_GREEN,
});
const SectionFooterLinkColor = Object.assign(
  {},
  AmplifyTheme.sectionFooterLink,
  {
    color: GREEN,
  }
);
const SectionFooterLinkColorDisabled = Object.assign(
  {},
  AmplifyTheme.sectionFooterLinkDisabled,
  {
    color: DISABLED_GREEN,
  }
);
const Container = Object.assign({}, AmplifyTheme.container, {
  justifyContent: "center",
});
const MyTheme = Object.assign({}, AmplifyTheme, {
  button: ButtonColor,
  buttonDisabled: DisabledButtonColor,
  sectionFooterLink: SectionFooterLinkColor,
  SectionFooterLinkColorDisabled: SectionFooterLinkColorDisabled,
  container: Container,
  disabled: Disabled,
});

export default MyTheme;
