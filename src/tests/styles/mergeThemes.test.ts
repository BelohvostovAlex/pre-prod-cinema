import { Colors } from "../../constants/styles/colors";
import { mergeThemes } from "../../styles/theme/config";
import lightTheme from "../../styles/theme/light";
import darkTheme from "../../styles/theme/dark";

describe("should recieve merged theme", () => {
  it("should be merged common and light theme", () => {
    const mergedTheme = mergeThemes(lightTheme);
    expect(mergedTheme).toHaveProperty("name", "light");
    expect(mergedTheme).toHaveProperty("colors.primary", Colors.BLACK);
    expect(mergedTheme).toHaveProperty("colors.secondary", Colors.ORANGE);
    expect(mergedTheme).toHaveProperty(
      "colors.backgroundColor",
      Colors.BG_LIGHT,
    );
    expect(mergedTheme).toHaveProperty("colors.lightGray", Colors.LIGHT_GRAY);
    expect(mergedTheme).toHaveProperty("border_radius.8", "8px");
    expect(mergedTheme).toHaveProperty("typography.poppins_r");
  });

  it("should be merged common and dark theme", () => {
    const mergedTheme = mergeThemes(darkTheme);
    expect(mergedTheme).toHaveProperty("name", "dark");
    expect(mergedTheme).toHaveProperty("colors.primary", Colors.WHITE);
    expect(mergedTheme).toHaveProperty("colors.secondary", Colors.ORANGE);
    expect(mergedTheme).toHaveProperty(
      "colors.backgroundColor",
      Colors.BG_DARK,
    );
    expect(mergedTheme).toHaveProperty("colors.lightGray", Colors.LIGHT_GRAY);
    expect(mergedTheme).toHaveProperty("border_radius.8", "8px");
    expect(mergedTheme).toHaveProperty("typography.poppins_r");
  });
});
