function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  const copy = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    copy[key] = deepClone(obj[key]);
  }

  return copy;
}

const objA = { value: 1 };
const objB = { a: objA };
// This object needs to be cloned rather than directly referenced
// These reason: objB.a => objA.b => objB.a (circular dependency)
objA.b = deepClone(objB);

const clonedObj = deepClone(objA);