import { Card } from '@repo/ui/card'

export const P2PTransactions = ({
  transactions,
}: {
  transactions: {
    time: Date
    amount: number
    transactionType: string
  }[]
}) => {
  if (!transactions.length) {
    return (
      <Card title='P2P Transactions'>
        <div className='pt-8 pb-8 text-center'>No transactions</div>
      </Card>
    )
  }
  return (
    <Card title='P2P Transactions'>
      <div className='pt-2'>
        {transactions.map((t) => (
          <div className='flex justify-between'>
            <div>
              {t.transactionType === 'Sent' ? (
                <div className='text-sm'>Sent INR</div>
              ) : (
                <div className='text-sm'>Received INR</div>
              )}
              <div className='text-xs text-slate-600'>
                {t.time.toDateString()}
              </div>
            </div>
            <div className='flex flex-col justify-center'>
              {t.transactionType === 'Sent' ? <>-</> : <>+</>} Rs{' '}
              {t.amount / 100}
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}