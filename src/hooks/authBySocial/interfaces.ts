import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";

type ProviderType =
  | FacebookAuthProvider
  | GoogleAuthProvider
  | GithubAuthProvider;

type ClassProviderType =
  | typeof FacebookAuthProvider
  | typeof GoogleAuthProvider
  | typeof GithubAuthProvider;

export interface UseAuthBySocialNetwork {
  provider: ProviderType;
  ClassProvider: ClassProviderType;
}
