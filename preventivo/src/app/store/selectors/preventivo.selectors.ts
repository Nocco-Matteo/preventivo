import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../state";

export const selectFeature = createFeatureSelector<AppState>('preventivo');

export const selectDomande = createSelector(
    selectFeature,
    (state: AppState) => state.domande
);

export const selectRisposte = createSelector(
    selectFeature,
    (state: AppState) => state.risposte
  );