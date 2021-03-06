import { StyleSheet } from "react-native";

export var widSep = 2.5; // 4
export var heiSep = 2; // 5
export var buttonWid = 22.5; //  4
export var buttonHei = 8; // 5

export const menuHeight = 60;
export const menuBackSize = 40;

export const styles = StyleSheet.create({
  headerWrapper: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
  },
  buttonWrapper: {
    width: "100%",
    position: "absolute",
  },
  menu: {
    borderWidth: 3,
    borderColor: "black",
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: menuHeight + 6,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    justifyContent: "center",
  },
  pageTitle: {
    top: 0,
    margin: "0 auto",
    height: menuHeight,
    paddingTop: menuHeight / 3,
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  backButt: {
    position: "absolute",
    left: 0,
    top: 0,
    width: menuBackSize,
    height: menuBackSize,
    alignSelf: "flex-start",
  },
  shareButt: {
    position: "absolute",
    right: 0,
    top: 0,
    width: menuBackSize,
    height: menuBackSize,
    alignSelf: "flex-end",
  },
  backBackground: {
    position: "absolute",
    margin: (menuHeight - menuBackSize) / 2,
    width: menuBackSize,
    height: menuBackSize,
    left: 0,
    top: 0,
  },
  shareBackground: {
    position: "absolute",
    margin: (menuHeight - menuBackSize) / 2,
    width: menuBackSize,
    height: menuBackSize,
    right: 0,
    top: 0,
    alignSelf: "flex-end",
  },
  content: {
    zIndex: -1,
    paddingTop: menuHeight + 20,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  addCellButt: {
    width: 50,
    height: 50,
    borderWidth: 3,
    borderRadius: 10,
  },
  unitButtonView: {
    flexDirection: "row",
  },
  unitInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  cell: {
    marginTop: 5,
    marginBottom: 5,
    height: 50,
    width: "100%",
    flexDirection: "row",
  },
  eqnBox: {
    width: "85%",
    height: 50,
    borderWidth: 3,
    overflow: "hidden",
    backgroundColor: "#dddddd",
  },
  ansBox: {
    width: "15%",
    height: 50,
    borderWidth: 3,
    overflow: "hidden",
    backgroundColor: "#dddddd",
  },
  cellSelected: {
    marginTop: 5,
    marginBottom: 5,
    height: 50,
    width: "100%",
    borderLeftColor: "#FF0000",
    borderLeftWidth: 6,
  },
  cellWrapper: {
    flexDirection: "row",
    width: "100%",
  },
  graphCell: {
    marginTop: 5,
    marginBottom: 5,
    height: 50,
    width: "100%",
    flexDirection: "row",
  },
  graphEqnBox: {
    width: "85%",
    height: 50,
    borderWidth: 3,
    overflow: "hidden",
    backgroundColor: "#dddddd",
  },
  graphAnsBox: {
    width: "15%",
    height: 50,
    borderWidth: 3,
    overflow: "hidden",
    backgroundColor: "#dddddd",
  },
  graphCellSelected: {
    marginTop: 5,
    marginBottom: 5,
    height: 50,
    width: "100%",
    borderLeftColor: "#FF0000",
    borderLeftWidth: 6,
  },
  pageButt: {
    marginTop: 10,
    height: "10vh",
    width: "60%",
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
    borderWidth: 3,
    borderRadius: 10,
  },
  keyboardPadding: {
    marginTop: "50vh",
  },
  keyboard: {
    position: "absolute",
    left: 0,
    top: "50vh",
    height: "50vh",
    width: "100%",
    borderWidth: 2,
    backgroundColor: "#000000",
  },
  keyboardButton: {
    position: "absolute",
    backgroundColor: "#FFFFFF",
    width: buttonWid.toString() + "%",
    height: buttonHei.toString() + "vh",
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 10,
  },
  imgBackground: {
    width: 50,
    height: 50,
    flex: 1,
  },
});
