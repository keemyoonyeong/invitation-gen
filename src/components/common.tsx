export function If({ v, children }: { v: boolean, children: any }) {
    if (!v) {
        return null
    }

    return children
}
