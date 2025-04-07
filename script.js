function firstWord(str) {
  // Trim leading spaces to handle cases like ' Hello World!'
  str = str.trim();

  // Find index of the first space
  const spaceIndex = str.indexOf(" ");

  // If there's no space, return the entire string
  if (spaceIndex === -1) return str;

  // Otherwise, return from 0 to the space index
  return str.substring(0, spaceIndex);
}
