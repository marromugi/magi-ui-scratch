import { TokenBase } from "../../types";

export const generateColorType = async (tokens: TokenBase) => {
  return Object.entries(tokens.color ?? {}).flatMap(
    ([semantics, scales]) => {
      const key = isNaN(parseInt(Object.keys(scales)[0])) ? "" : 1;

      switch (typeof key) {
        case "number": {
          return [
            `${semantics}: {`,
            ...Object.entries(scales).map(([code]) => {
              return `${code}: string;`;
            }),
            `};`,
          ];
        }
        case "string": {
          return [`"${semantics}": string;`];
        }
      }
    },
  );
  // return Object.entries(tokens.color ?? {}).flatMap(
  //   ([theme, colors]) => {
  //     return [
  //       `${theme}: {`,
  //       ...Object.entries(colors).map(([name, codes]) => {
  //         return typeof codes === "string"
  //           ? [`${name}: string;`].join("\n")
  //           : [
  //               `${name}: {`,
  //               ...Object.entries(codes ?? {}).map(
  //                 ([code]) => `${code}: string;`,
  //               ),
  //               "};",
  //             ].join("\n");
  //       }),
  //       `};`,
  //     ];
  //   },
  // );
};
