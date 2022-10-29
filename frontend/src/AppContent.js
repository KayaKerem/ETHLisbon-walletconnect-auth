import { Web3Button, useConnectModal, useBlockNumber } from '@web3modal/react'

export default function AppContent() {
    const { isOpen, open, close } = useConnectModal()
    const { data, error, isLoading, refetch } = useBlockNumber({ watch: true })

    return (
        <>
            <Web3Button />
            {/* or */}
            <button onClick={open}>Open Modal</button>
        </>
    )
}