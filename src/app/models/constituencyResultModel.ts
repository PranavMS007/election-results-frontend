export interface PartyResult  {
    total_votes: number;
    total_mps: number;
}

export interface ElectionResults {
    [partyName: string]: PartyResult;
}