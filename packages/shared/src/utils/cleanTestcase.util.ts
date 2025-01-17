// This function should be called only from a worker thread
// Since testcases can be very big and can take a long time to trim
export function cleanTestcase (testcase: Buffer): Buffer {
  const data = testcase.toString('base64').trimEnd()

  const cleaned = data
    .split(/\r?\n/)
    .map(line => line.trimEnd())
    .join('\n')

  return Buffer.from(cleaned)
}
